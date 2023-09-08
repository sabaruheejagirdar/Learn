function curriedSum(a) {
    return function (b) {
        return function (c) {
        return a + b + c;
        };
    };
}

console.log(curriedSum(1)(2)(3));


// ORRRRRRRRRRRRRR

function anotherSum(a,b,c){
    return a+b+c;
}

function anotherCurry(func){
return (a) => (b) => (c) => func(a,b,c);
}

const anotherCurriedSum = anotherCurry(anotherSum)
console.log(anotherCurriedSum(10)(20)(30))