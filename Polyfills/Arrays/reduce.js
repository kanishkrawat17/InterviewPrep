const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, num) => {
    acc = acc + num
    return acc;
}, )

console.log("sum:: ", sum);


Array.prototype.myReduce = function (cb, init) {
    let acc = init;
    for (let i = 0; i < this.length; i++) {
       acc =  acc ? cb(acc, this[i]) : this[i];
    };
    return acc;
}

const sum2 = arr.myReduce((acc, num) => {
    acc = acc + num
    return acc;
})
console.log("sum2:: ", sum2)