// Welcome to our Playground!
// generally all operations run sequentially, 
// if you happen to run slow opeartions separately then use Web Worker.
// Web Worker is a browser API for running scripts in a separate thread from the execution thread
// Also remember that web worker doesnt has access to DOM element
// (i.e) document.get ELement. Therefor use postMessage 

const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowButtonOperation)
sayHelloButton.addEventListener('click', sayHello)

function sayHello() {
  console.log("hello!!")
}

function slowButtonOperation(){
  const worker = new Worker("worker.js");
//   worker.postMessage(10)

  worker.addEventListener("message", event=>{
    console.log(event.data)
  })
    
}

