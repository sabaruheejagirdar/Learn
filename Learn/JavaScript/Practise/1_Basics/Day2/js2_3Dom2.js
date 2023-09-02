const paragraph = document.createElement('p');
const text = document.createTextNode('Hello World');
paragraph.append(text);

document.body.append(paragraph);
// document.body.prepend(paragraph);

for (let i=0; i<4; i++){
    const parent = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = `New List item with index- ${i}`;
    parent.append(li);
}

// Scrollables

const scrollable = document.getElementById("scrollable");
// console.log(scrollable)

console.log(scrollable.clientHeight)
console.log(scrollable.offsetHeight)
console.log(scrollable.scrollHeight)
console.log(scrollable.offsetTop)