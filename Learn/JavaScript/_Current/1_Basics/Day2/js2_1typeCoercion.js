num = '56'
console.log(typeof(num)) //number
console.log(typeof(Number(num))) //string
console.log(typeof(Boolean(num))) //boolean
console.log(typeof(num)) //string

console.log(null == undefined) //true
console.log(null === undefined) //false
console.log(NaN == NaN) // false

console.log(typeof(NaN)) //number
console.log(typeof(undefined)) //undefined
console.log(typeof(null)) //object
console.log("*********")
console.log({} == {})