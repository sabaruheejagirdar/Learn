const x = yield 1;
yield x + 2;
yield 3;
}

const generatorObj = genNumbers();
console.log(generatorObj.next().value);
console.log(generatorObj.next(3).value);
console.log(generatorObj.return(7).value);
console.