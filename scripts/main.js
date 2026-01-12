// =============================================
// DESN 378: Code + Design 2
// Your JavaScript will live here.
//
// This file will grow throughout the quarter
// as you learn to make the web behave.
// =============================================

console.log('Portfolio loaded');

//alert("Hello World!\n\nI'm JavaScript :)");

//============================================
//From the MDN Behavioral Layer Tutorial (Week 0):
//============================================
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/space_beam.jpg") {
    myImage.setAttribute("src", "images/bangers.jpg");
  } else {
    myImage.setAttribute("src", "images/space_beam.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});




// Week 1: You'll add theme toggle code here
// Week 2: You'll add localStorage persistence here
// Week 3+: More to come...
