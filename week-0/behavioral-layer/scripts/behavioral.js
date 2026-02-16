//============================================
//From the MDN Behavioral Layer Tutorial (Week 0):
//============================================

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/space_beam.jpg") {
    myImage.setAttribute("src", "images/space_falling.jpg");
  } else {
    myImage.setAttribute("src", "images/space_beam.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to the Universe, ${myName}!`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the Universe, ${storedName}!`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

//Verify the user's name is not empty
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the Universe, ${myName}!`;
  }
}


/*
  ---SUMMARY---
  This file does two things:
  1. [Your explanation of the image changer]
  The javaScript creates an event listener to monitor if the user clicks on the image. 
  If the user does click on the image, the if-else statement is run and it will change the image to the other image.
  2. [Your explanation of the welcome message]
  The welcome message should prompt the user when they enter the page and ask for a name. 
  The JavaScript will store that name in a variable and update the h1 with that name variable accordingly. 
  Additionally, the code uses the localStorage.setItem() function to keep track of this personalized variable, even if the user leaves and comes back later.
​
  The key pattern I learned: Declare your variables, determine (and craft) the function you will use,
  write out your initialization code (runs when you open the page in this case), set up an event listenter to watch for actions taken, 
  then call the established function.
*/