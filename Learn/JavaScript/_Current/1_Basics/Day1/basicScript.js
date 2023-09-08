// alert("welcome!!")

// Number operations
let num = 10.5;

console.log(num * 2);
console.log(num % 2);
console.log(Math.pow(10,2))
console.log(typeof 10n)

// Strings
console.log(`---Hello ${num}
World---`);
console.log(`New
sentence`);

// String operations

str = 'abcdefgji   '
console.log(str)
console.log(str[1])
console.log(str.charAt[4])
console.log(str.startsWith('a'))
console.log(str.endsWith('a'))
console.log(str.toUpperCase())
console.log(str.substr(2,3))
console.log(str.slice(2,3))
console.log(str.padStart(15,'-'))
console.log(str.padEnd(15,'-'))
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

str2 = 'a,b,c,d'
console.log(str2.split(","))

str2 = 'a,b,c,d'
array2 = str2.split(",")
console.log(array2)

console.log(array2.join(","))


// Objects


const person = {
    name: 'Saba',
    course: 'FEX',
    name: 'Ruhee',
    12: 'specs'
  }
  
  console.log(typeof JSON.stringify(person))
  console.log(typeof JSON.parse(JSON.stringify(person)))
  console.log(typeof person)
  console.log(person)
  console.log(person.nasme)
  
  // Alike Objects maps and set.
  // In Maps we can set keys with INT
  
  const map = new Map();
  map.set(123, 'hello');
  map.set(456, 'World');
  console.log(map)
  console.log(map.size)
  console.log(map.get(123))
  
  // SET- Alike map, but only unique values
  const set = new Set();
  set.add("Hello");
  set.add("World");
  set.add(1);
  set.add(2);
  set.add(1);
  set.delete("Hello")
  console.log(set)

  
const arr = [1,2,3]
arr.push(4)
console.log(arr.length)
console.log(arr)
console.log(typeof arr)


