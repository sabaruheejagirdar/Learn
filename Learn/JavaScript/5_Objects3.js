// Converting to primitives
const websiteObject = {
    name: 'AlgoExpert',
    rating: 5,
}

console.log(websiteObject.valueOf())

websiteObject.valueOf = function(){
  return 5;
}

console.log(websiteObject-1)