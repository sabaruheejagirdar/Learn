function anotherPerson(name, age){
    this.name = name
    this.age = age
}

anotherPerson.prototype = {
constructor: anotherPerson,
isHumann: true
}

const conner = new anotherPerson("Conner",18);
const clement = new anotherPerson("Clement",22);
console.log(Object.getPrototypeOf(conner))
console.log(conner)

console.log(conner instanceof anotherPerson)