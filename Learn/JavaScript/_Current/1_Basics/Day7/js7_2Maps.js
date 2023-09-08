 // Maps- Can be implemented using Objects or the MAP class

 const map1 = new Map();
 // OR instantiate via constructor
 // const map1 = new Map([[1,"One"],[2,"Two"],[3,"Three"]]);
 map1.set("Language", "English");
 map1.set(1,"One");
 map1.set(2,"Two");
 map1.set(3,"Three");
 map1.set(4,"Four");
 map1.delete(4)
 map1.set({},42)
 // console.log(map1)
 
 console.log(map1.get(3))
 console.log(map1.size)
 console.log(map1.has(20))
 console.log(map1.has({}))
 
 // console.log(map1.clear)
 
 // Iterating Map
 
 console.log("-------------")
 
 for ([key,value] of map1){
   console.log(key,value)
 }
 
 map1.forEach((value,key) =>{
   console.log(key, value);
 })
 
 // Iterator
 console.log("-------------")
 
 const iter = map1.entries();
 console.log(iter.next().value);
 console.log(iter.next().value);
 console.log(iter.next().value);
 console.log(iter.next().value);
 console.log(iter.next().value);
 console.log(iter.next().value);
 console.log(iter.next().value);
 
 
 
 
 
 