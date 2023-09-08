// window.addEventListener("keydown", event=>{
//     console.log(event.code);
// })

const scrollable = document.getElementById('scrollable');

scrollable.addEventListener('click', event =>{
    console.log(event.target)
    console.log(this)
    if(event.target !== this){
        event.target.textContent = 'Clicked!!'
    }
})