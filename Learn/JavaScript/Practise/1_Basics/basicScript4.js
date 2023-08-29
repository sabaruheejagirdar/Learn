// Variables and Scoping
// Var is hoisted first in DOM

console.log(varNum3) // Undefined
// console.log(letNum) --> Gives error

const constNum3 = 10;
let letNum3 = 10;
var varNum3 = 10;

console.log('constNum: ', constNum3);
console.log('letNum: ', letNum3);
console.log('varNum:', varNum3);



function test(){
  var var1 = 0;
  let let1 = 0;

  console.log(var1);
  console.log(let1);
}

test();