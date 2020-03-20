const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const input = document.getElementsById('input');

addButton.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul');
    listItem.textContent = input.nodeValue;

    list.appendChild(listItem);

    input.value = '';
})

// Create a "close" button and append it to each list item
// const itemsList = document.getElementsByTagName("li");

// for (let i = 0; i < itemsList.length; i++) {
//     let span = document.createElement("span");
//     let cross = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(cross);
//     itemsList[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// const close = document.getElementsByClassName("close");
// for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }

////////// Fix below code 

// Add a "checked" symbol when clicking on a list item
// const list = document.querySelector('ul'); // returns the first Element within the document that matches the specified selector
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// const list = document.querySelector('ul');
// list.addEventListener("click", (ev) => {

// })

// const list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'li') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// Creating new list item
// const input = document.getElementById("myInput")
// const button = document.getElementById("addButton")

// button.addEventListener("click", () => {
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
// })


// Create a new list item when clicking on the "Add" button
// function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             let div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }