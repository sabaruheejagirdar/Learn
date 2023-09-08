
const set1 = new Set();
set1.add(11)
set1.add(12)
set1.add(13)
set1.add(14)
console.log(set1)

console.log(set1.has(11))
console.log(set1.delete(11))
console.log(set1.clear)
console.log(set1)

console.log("---------------")
for (value of set1){
  console.log(value)
}
console.log("---------------")
set1.forEach(value =>{
  console.log(value)
})
console.log("---------------")
const iter = set1.values();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

console.log("---------------")
console.log("Remove duplicates from array")
arrDup = [1,2,2,2,3,4,5,5,6]
console.log(Array.from(new Set(arrDup)))