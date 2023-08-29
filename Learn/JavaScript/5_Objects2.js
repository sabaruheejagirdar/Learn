
// set and get
const website2 = {
    name: 'AlgoExpert',
    set setRating(value){
      this.rating = value;
    },
    get getRating(){
      return this.rating*2;
    }
      
  }
  
  website2.setRating = 6;
  console.log(website2.rating);
  console.log(website2.getRating);

// ***********************INHERITANCE******************
const websiteInherit = {
    name: 'AlgoExpert',
    rating: 5,
      
}
const objInherit = {
  __proto__: websiteInherit
}

console.log(websiteInherit)
console.log(objInherit)

// *****ITERATING OVER OBJECTS

console.log(Object.keys(objInherit));
console.log(Object.values(objInherit));
console.log(Object.entries(objInherit));
console.log("***for each*******");
Object.entries(objInherit).forEach(function ([key,value]) {
  console.log(key,value);
})

console.log("**********");
// this includes the keys of inherited members
for (key in objInherit){
  console.log(key);
}
console.log("**********");

// ******COPY OBJECT
const copiedObj = {
    originl: 12345
}
Object.assign(copiedObj,objInherit)
console.log("COPIED OBJ: ",copiedObj)

// ***FREEEEEZE
Object.freeze(websiteInherit);
websiteInherit.name = "React"
console.log(websiteInherit);
Object.isFrozen(websiteInherit);

 // ****SEALED: Doesn't allow to add new properties to object, however existing properties can be updated

 Object.seal(websiteInherit);
 websiteInherit.name = "Saba";
 console.log(Object.isSealed(websiteInherit));
 console.log(websiteInherit);