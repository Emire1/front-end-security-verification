//import "./styles.css";

let draggableImageInner = document.getElementById("draggable-image");
let draggableImageZone = document.getElementById("draggable-image-zone");
let mainImage = document.getElementById("main-image");
let mainImageBits = mainImage.getElementsByTagName("*");
let result = document.getElementById("result");
let arrayOfMainImageBits = [];
let matches = 3;

function reset() {
  var randomElement =
    arrayOfMainImageBits[
      Math.floor(Math.random() * arrayOfMainImageBits.length)
    ];
  //console.log(arrayOfMainImageBits);
  //console.log(randomElement);
  var randomElementClone = randomElement.cloneNode(randomElement);
  randomElementClone.setAttribute("draggable", "true");
  randomElementClone.setAttribute("id", "draggable-pic");
  //console.log(randomElementClone);
  if (draggableImageInner.children.length <= 0) {
    draggableImageInner.appendChild(randomElementClone);
    // draggableImageInner.innerHTML = randomElementClone.outerHTML;
    console.log("----1-----");
    console.log(draggableImageInner.getElementsByTagName("draggable-pic"));
    // console.log(draggableImageInner.getElementById('draggable-pic').attributes[0]);
  } else {
    while (draggableImageInner.firstChild) {
      draggableImageInner.removeChild(draggableImageInner.firstChild);
      console.log(draggableImageInner);
      console.log(draggableImageInner.attributes);
      // draggableImageInner.innerHTML = randomElementClone.outerHTML;
      // console.log("----2----");
      // console.log(draggableImageInner);
      // console.log(draggableImage.outerHTML);
      // console.log(randomElementClone.outerHTML);
    }
    //draggableImageInner.appendChild(randomElementClone);
    draggableImageInner.appendChild(randomElementClone);
  }
}

function initiate() {
  let randomElement =
    arrayOfMainImageBits[
      Math.floor(Math.random() * arrayOfMainImageBits.length)
    ];
  //console.log(arrayOfMainImageBits);
  //console.log(randomElement);
  let randomElementClone = randomElement.cloneNode(randomElement);
  randomElementClone.setAttribute("draggable", "true");
  randomElementClone.setAttribute("id", "draggable-pic");
  //console.log(randomElementClone);
  draggableImageInner.appendChild(randomElementClone);
}

function removeFirstChild() {
  for (const bits of mainImageBits) {
    if (bits.firstChild) {
      bits.removeChild(bits.firstChild);
    }
  }
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
//console.log(draggableImage.attributes[0].name);
//console.log(draggableImage.outerHTML);
//console.log(draggableImage.innerHTML);
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

function dragLeave() {
  this.append(draggableImage);
}

function drop(evnt) {
  //console.log(draggableImage.attributes[0].name);
  //console.log(evnt.target.attributes[0].name);
  //removeFirstChild();
  if (draggableImage.attributes[0].name === evnt.target.attributes[0].name) {
    result.innerText = "Congratulation! you matched it";
  } else {
    //console.log(draggableImage);
    // matches--;
    // if (matches > 0) {
    //     result.innerText = `Not a match! you have ${matches} more attempts left`;
    //     // removeFirstChild();
    //     reset();
    //     //console.log(matches);
    // } else {
    //     result.innerText = `you have ${matches} attempts and it is over`;
    //     // removeFirstChild();
    result.innerText = "Sorry you didn't match it";
    draggableImageInner.innerHTML = "Bye!";
    // }
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
