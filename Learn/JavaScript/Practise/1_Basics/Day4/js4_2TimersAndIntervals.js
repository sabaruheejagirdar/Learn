
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const count = document.getElementById("count")

console.log(count)

start.addEventListener("click", onStart);
stop.addEventListener("click", onStop);

let timerID;

function onStart(){
    timerID = setInterval(() =>{
        count.textContent++;
    },100);
}

function onStop(){
    clearInterval(timerID)
}


setTimeout(()=> {
    console.log('timeout')
}, 500)

