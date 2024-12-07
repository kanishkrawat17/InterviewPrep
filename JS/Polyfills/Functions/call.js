// Call = sets the this for the function, on which it being called with

const person = {
    name: "kanishk",
    age: 1226,
    bodyCount: 0,
    greet: function (...args) {
        console.log({args}); // its an array
        return `${this.name} says Hello with bodyCount of ${this.bodyCount} .`
    }
};

const person1 = {
    name: "Pintu bhai",
    bodyCount: 101,
}

//  Person1 borrows function `greet` from person using call.
const msg = person.greet.call(person1, "Arg1", "Arg2");
console.log({ msg });

/**************************************** Call Polyfill*********************************************/

Function.prototype.myCall = function (obj, ...args) {
    // this -> function.. to be called on obj
    const uniqueId = Symbol(); // typeof uniqueId is Symbol
    obj[uniqueId] = this; // obj = {name:"kanishk", "Symbol": function () {}}
    const result = obj[uniqueId](...args);
    delete obj[uniqueId];
    return result;
}

const msg1 = person.greet.myCall(person1, "_Arg1", "_Arg2");
console.log({ msg1 });