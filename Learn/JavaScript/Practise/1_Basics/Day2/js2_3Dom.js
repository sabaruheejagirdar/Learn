const  firstLi = document.getElementById('first')
console.log(firstLi)

// const secondLi = document.querySelector("li")
const allH1 = document.querySelectorAll("h1")

// const tripled = arr.map((num)=>num*3)
allH1.forEach(function(h1) {
    // h1.style.background = "pink";
    console.log(h1)
} 
)
allH1[0].style.background = "purple";
allH1[0].textContent = "Changed!";
allH1[0].setAttribute('class','big') // Updates the entire class with big 
allH1[0].classList.remove('big')
allH1[0].classList.add('big')
allH1[0].classList.toggle('blue')



console.log(window.innerHeight)
console.log(window.innerWidth)

