import * as icons from './index.js';

const myArray = [];
var searchedText = "";

for (const keys in icons) {
    myArray.push(keys);
}
const iconsDiv = document.getElementById('icons');
function setAllIcons() {
    if (searchedText === "")
        myArray.forEach(element => {
            const createdChild = document.createElement('section');
            createdChild.innerHTML = `${icons[element]()}`
            createdChild.innerHTML += `<p>${element}</p>`
            iconsDiv.appendChild(createdChild);
        });
    else {
        myArray.forEach(element => {
            if (element.toLowerCase().includes(searchedText.toLowerCase())) {
                const createdChild = document.createElement('section');
                createdChild.innerHTML = `${icons[element]()}`
                createdChild.innerHTML += `<p>${element}</p>`
                iconsDiv.appendChild(createdChild);
            }
        });
    }
}

setAllIcons();

const input = document.getElementById('search');
input.addEventListener('keyup', (e) => {
    searchedText = e.target.value;
    iconsDiv.innerHTML = "";
    setAllIcons();
})

// how to use in React projects:
// <span dangerouslySetInnerHTML={{__html: iconName()}}></span>