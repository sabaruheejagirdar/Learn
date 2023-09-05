const person = {
    isHuman: true
}

const child = Object.create(person)
child.maxAge =18
// OR
const saba = Object.assign(Object.create(child),{
    name: 'Saba'
})

// console.log(person)
// console.log(child.isHuman)
// console.log(saba)
console.log(Object.getPrototypeOf(saba))


// INTERESTING
const funcProto = Object.getPrototypeOf(() => {})
// console.log(Object.getOwnPropertyNames(funcProto))

const arrayProto = Object.getPrototypeOf([])
// console.log(Object.getOwnPropertyNames(arrayProto))


