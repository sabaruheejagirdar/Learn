// WeakSet - Only uses Objects as key
//  objects stored in a WeakSet can be garbage collected if there are no other strong references to them in your code.
// Since Objects are garbage collected, Therefore, there's no way to set what's in the object
// However, weakSet.has function

const weakSet = new WeakSet();
let obj;

(function(){
  const obj = {};
  weakSet.add(obj);
})();

console.log(weakSet)
console.log(weakSet.size)
console.log(weakSet.has(obj))
