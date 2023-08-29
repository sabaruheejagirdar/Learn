// Conditionals

const condition = "false"
if (condition == true){
  console.log("True!!!")
}else if(condition === false){
  console.log("Strictly false")
}else{
  console.log("False--")
}

// Try catch- Error handling

try{
    throw new Error("Oh no!!")
}catch(error){
    console.log(error)
}

console.log("Here!!!")

console.log("hey")
console.error("Error")
console.debug("Debug")

console.time();
for(let i=1; i<10000; i++){}
console.timeLog();

console.count();
console.count();
console.countReset();
console.count();

console.table([[1,2],['Hello','World']])