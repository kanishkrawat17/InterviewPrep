// console.log("Started");

// const prom = new Promise((resolve, reject) => {
//     console.log("inside promise CB");
//     setTimeout(() => {
//         console.log("setTimeout CB");
//         resolve("Promise Resolved");
//     }, 1000);
//     console.log("After promise Resolved");
// });

// prom.then(data => {
//     console.log({data}, "DATA")
// })
// console.log("End");


/*-------- Polyfill---------- */

function CustomPromise(executor) {
    this.state = "pending";
    this.value = undefined;
    this.thenCBs = [];
    this.catchCBs = [];

    this.then = (onFulfilled) => {
        if (this.state === "fulfilled") {
            queueMicrotask(() => {
                const value = onFulfilled(this.value);
                this.value = value;
            });
        } else if (this.state === "pending") {
            this.thenCBs.push(onFulfilled);
        }
        console.log("this", this)
        return this;
    };

    this.catch = (cb) => {
        if (this.state === "pending") {
            this.catchCBs.push(cb);
        } else if (this.state === "rejected") {
            const value = cb(this.value);
            this.value = value;
        }
        return this;
    };

    const resolve = (data) => {
        if (this.state === "pending") {
            this.state = "fulfilled";
            this.value = data;
            queueMicrotask(() => {
                this.thenCBs.forEach(cb => cb(this.value));
                this.thenCBs = [];
            });
        }
    };

    const reject = (data) => {
        if (this.state === "pending") {
            this.state = "rejected";
            this.value = data;
            queueMicrotask(() => {
                this.catchCBs.forEach(cb => cb(data));
                this.catchCBs = [];
            })
        }
    };


    try {
        executor(resolve, reject);
    } catch (e) {
        throw new Error("Error aa gaya hai...!!");
    }
};


const p1 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        // resolve(5);
        reject("Promise Rejected"); // if you comment this line, then promise will be rejected.
    })
    // resolve(5);
});
p1
    .then((data) => {
        console.log({ "data_1": data });
        return data + 10;
    })
    .then(res => {
        console.log({ "data_2": res });
        // throw new Error("Error from then block");
    })
    .catch((err) => {
        console.log({ err })
    })
