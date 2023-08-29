// FUNCTIONS
function addTwo(num = 8){
    return num+2
  }
  
console.log(addTwo(3)) //5
console.log(addTwo())  //10


// Callback func

function callBack(func, param){
console.log(func(param))
}

callBack(addTwo, 10) //12
console.log(typeof addTwo);
// Type of function is OBJECT
console.log (addTwo instanceof Object )

// LOOPS
for (let i=0; i<4; i++){
    console.log(i);
    if(i===1){
        break;
    }
}

console.log("-------") 

let j = 0;
while(j<40){
    console.log(j);
    j += 10
}

console.log("-------") 

for (const value of [1,2,3]){
    console.log(value)
}

console.log("-------") 

const obj = {
    name: "Saba",
    college: "UTA"
}

for(const key in obj){
    console.log(key, obj[key])
}

// Ananymous Function- Since there is no function name
[1,2,3].forEach(function(value){
    console.log(value)
  })