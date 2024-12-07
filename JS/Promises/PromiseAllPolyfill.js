const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved 1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    reject("Promise Rejected 33");
    // }, 1000);
})
// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   resolve("Promise Resolved 2");
//   // }, 1000);
// });
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  resolve("Promise Resolved 3");
  // }, 1000);
});

const p4 = 20;

const p5 = Promise.resolve(3);

const result = Promise.allSettled([p1, p2, p3, p4, p5])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));

function customAllSetlled(promises) {
  let count = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          result.push({ state: "fulfilled", value, });
        })
        .catch((err) => {
          result.push({ state: "rejected", value: err, });
        })
        .finally(() => {
          count++;
          if (promises.length == count) {
            return result;
          }
        });
    });
  });
}

const result2 = customAllSetlled([p1, p2, p3, p4, p5])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
