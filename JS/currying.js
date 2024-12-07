function curringFunc(a) {
    return function (b) {
        if (b) {
            return curringFunc(a + b);
        }
        return a;
    }
};

console.log(curringFunc(1)(2)(5)(), "Ans-1")


/** Question: 2 */

function sumCurrying(...args) {
    const sum = args.reduce((acc, num) => acc + num, 0);
    return function (...innerArgs) {
        if (innerArgs.length==0) return sum;
        return sumCurrying(sum, ...innerArgs); 
    }
}

console.log(sumCurrying(2,1,0)(1,3)(3), 'Ans-2')