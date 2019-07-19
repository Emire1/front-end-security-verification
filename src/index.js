let draggableImageInner = document.getElementById("draggable-image");
let mainImage = document.getElementById("main-image");
let mainImageBits = mainImage.getElementsByTagName("*");
let result = document.getElementById("result");
let reloadButton = document.getElementsByClassName("reload-button")[0];
let arrayOfMainImageBits = [];

function initiate() {
  let randomElement =
    arrayOfMainImageBits[
      Math.floor(Math.random() * arrayOfMainImageBits.length)
    ];
  let randomElementClone = randomElement.cloneNode(randomElement);
  randomElementClone.setAttribute("draggable", "true");
  randomElementClone.setAttribute("id", "draggable-pic");
  draggableImageInner.appendChild(randomElementClone);
}

function dragOver(evnt) {
  evnt.preventDefault();
}

function dragEnter(evnt) {
  evnt.preventDefault();
}

function dragLeave() {
}

function drop(evnt) {
  if (draggableImage.attributes[0].name === evnt.target.attributes[0].name) {
    result.innerText = "Congratulation! you matched it";
    this.append(draggableImage);
  } else {
    result.innerText = "Sorry you didn't match it";
    draggableImageInner.innerHTML = "click on the reload button to try again";
    reloadButton.style.visibility = "visible";
  }
}

function dragStart() {
  draggableImage.style.cursor = "grab";
}

function dragEnd(evnt) {}

function mouseDown() {
  setTimeout(() => (draggableImage.style.cursor = "grabbing"), 0);
}

function dragLeave2() {
  draggableImage.style.cursor = "grabbing";
}

for (const bits of mainImageBits) {
  bits.addEventListener("dragover", dragOver);
  bits.addEventListener("dragenter", dragEnter);
  bits.addEventListener("dragleave", dragLeave);
  bits.addEventListener("drop", drop);
  arrayOfMainImageBits.push(bits);
}

initiate();

let draggableImage = document.getElementById("draggable-pic");
draggableImage.addEventListener("dragstart", dragStart);
draggableImage.addEventListener("dragend", dragEnd);
draggableImage.addEventListener("mousedown", mouseDown);
draggableImage.addEventListener("dragleave", dragLeave2);
