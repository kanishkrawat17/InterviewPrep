function curringFunc(a) {
    return function(b) {
        if(b) {
            return curringFunc(a+b);
        }
        return a;
    }
};

console.log(curringFunc(1)(2)(3)())