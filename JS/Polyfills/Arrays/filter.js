const arr = [1, 2, 3, 4, 5, 6, 7];

const evens = arr.filter(num => num % 2 == 0);
// console.log({evens}) ;


// Custom Approach is below....
Array.prototype.customFilter = function (cb) {
    // this == array, bcs customFilter function is being called with arr so inside customfilter "this" will be pointing to arr.
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            result.push(this[i])
        }
    }
    return result;
};

const result = arr.customFilter(num => num % 2 == 0);
console.log({result});