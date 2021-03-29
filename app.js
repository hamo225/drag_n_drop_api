'use strict'

const draggableList = document.querySelector("#draggable-list");
const checkBtn =document.querySelector("#check")

 
const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffet',
    'Bernard Arnault',
    'Carlos Slim',
    'Armancio Ortega',
    'larry Ellison',
    'Mark Zuckerberg',
    'Micheal Bloomberg',
    'Larry Page'
]

const listItems = [];
let dragStartIndex;
createList();

function createList() {
[...richestPeople].forEach((person, index)=>{
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index)
    listItem.innerHTML = `<span class="number">${index+1}</span>
    <div class="draggable" draggable="true">
    <p class="personName">${person}</p>
    <i class="fas fa-grip-lines"></i>
    </div>`;

    listItems.push(listItem);
    draggableList.appendChild(listItem)

})
}