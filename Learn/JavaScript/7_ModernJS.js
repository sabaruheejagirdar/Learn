
/***************1: Arrow and Anonymous Functions************/
const arr = [1,2,3]

// const doubled = arr.map(function doubled(num) {
//   return num+2
// })

const doubled1 = arr.map(function(num) {
  return num+2
})
// OOORRR
const doubled2 = arr.map((num) => {
  return num+2
})
// OR 
// Arrow function
const doubled3 = arr.map((num) => num+2)
console.log(doubled1)
console.log(doubled2)
console.log(doubled3)

/*************2.Destructiong Object****************************************/
const person = {
    name: 'Saba',
    college: 'UTA'
  };
  
  const {name} = person
  
  console.log(name)


/*****************************************************/
//Template literal
let myName = 'Saba'
console.log(`Hello ${myName}`)
// Null Coelascing
let lastname = null
lastname = null ?? 'Khan'
console.log(lastname)
// Optional Chaining
console.log(person?.anotherPer?.website)
console.log(person?.anotherPer?.website ?? 'FOOO') 
/*****************************************************/
/*****************************************************/
/*****************************************************/
