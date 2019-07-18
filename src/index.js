let draggableImageInner = document.getElementById("draggable-image");
let mainImage = document.getElementById("main-image");
let mainImageBits = mainImage.getElementsByTagName("*");
let result = document.getElementById("result");
let arrayOfMainImageBits = [];
let reloadButton = document.getElementsByClassName("reload-button");

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

for (const bits of mainImageBits) {
  bits.addEventListener("dragover", dragOver);
  bits.addEventListener("dragenter", dragEnter);
  bits.addEventListener("dragleave", dragLeave);
  bits.addEventListener("drop", drop);
  arrayOfMainImageBits.push(bits);
}

initiate();

var draggableImage = document.getElementById("draggable-pic");
draggableImage.addEventListener("dragstart", dragStart);
draggableImage.addEventListener("dragend", dragEnd);
draggableImage.addEventListener("mousedown", mouseDown);
draggableImage.addEventListener("dragleave", dragLeave2);

function dragOver(evnt) {
  evnt.preventDefault();
}

function dragEnter(evnt) {
  evnt.preventDefault();
}

function dragLeave() {}

function drop(evnt) {
  this.append(draggableImage);
  if (draggableImage.attributes[0].name === evnt.target.attributes[0].name) {
    result.innerText = "Congratulation! you matched it";
    draggableImageInner.removeChild(draggableImageInner.firstChild);
  } else {
    reloadButton.style.visibility = "visible";
    result.innerText = "Sorry you didn't match it";
    draggableImageInner.removeChild(draggableImageInner.firstChild);
  }
}

function dragStart() {
  draggableImage.style.cursor = "grab";
}

function dragEnd(evnt) {}

function mouseDown() {
  setTimeout(() => (draggableImage.style.cursor = "grabbing"), 0);
  // draggableImage.style.visibility = "visible";
}

function dragLeave2() {
  draggableImage.style.cursor = "grabbing";
  // draggableImage.style.visibility = "hidden";
}
