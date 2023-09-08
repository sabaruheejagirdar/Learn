const button = document.getElementById("button");

button.addEventListener('click', onClick);

function onClick(){
    console.log("You clicked button")
}

// THIS

const thisButton = document.getElementById("thisButton");
thisButton.addEventListener("click", onClickThisButton,{
    once:true
});

document.body.addEventListener("click", onClickThisButton);

function onClickThisButton(event){
    event.stopPropagation(); //Stop bubbling phase
    // event.preventDefault;
    // console.log(event);
    // console.log(event.target); //<button id="thisButton">Clicke Again</button>
    console.log(this); //<button id="thisButton">Clicke Again</button>
}