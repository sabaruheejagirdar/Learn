const promise4 = Promise.resolve(3);
console.log(promise4);
promise4.then(value => value*2)
.then(console.log)
.catch(error => console.log('Oh No:'+ error))
.finally(()=> console.log("done!!"))