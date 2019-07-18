let draggableImageInner = document.getElementById("draggable-image");
let mainImage = document.getElementById("main-image");
let mainImageBits = mainImage.getElementsByTagName("*");
let result = document.getElementById("result");
let arrayOfMainImageBits = [];

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
  if (draggableImage.attributes[0].name === evnt.target.attributes[0].name) {
    result.innerText = "Congratulation! you matched it";
  } else {
    result.innerText = "Sorry you didn't match it";
    draggableImageInner.innerHTML = `<button onClick="window.location.reload()"}> retry <\button>`;
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
