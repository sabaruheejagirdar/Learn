// Promises--> pending/fulfilled/rejected
// -----1.Promise-----
const promise = new Promise((resolve, reject) =>{
    resolve(2);
    // reject(2);
});

// console.log(promise);

//-----2.Promise with timeout-----
const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(2), 1000);
});

// console.log('--',promise2);

// setTimeout(()=> console.log(promise), 1000)

// ----3.Promise with THEN----
const promise3 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve(2), 1000);
    setTimeout(() => reject(new Error('Something went Wrong!!')), 1000);
});
// promise3.then(value => console.log(value));
// then with error
promise3.then(value => console.log(value),
error => console.log('Oh No'+ error));

//--- Promise thats with chaining----
const promise4 = Promise.resolve(3);
console.log(promise4);
promise4.then(value => value*2)
.then(console.log)
.catch(error => console.log('Oh No:'+ error))
.finally(()=> console.log("done!!"))

console.log("-------------")

// Async implicitly implements Promise

async function tester(){
    return await new Promise((res, rej)=>{
        setTimeout(() => res(3),1000)
    });
}
tester().then(console.log)
.catch(error=> console.log("--Oh No"+ error))



