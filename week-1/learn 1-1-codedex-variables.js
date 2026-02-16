// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Tayla Eliason
// Date: 01.13.26
// ============================================


// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const username = "Tater";
const favColor = "The color of televisions, tuned to a dead port";

let loc = "bed";
let mood = "asleep";

console.log(username + " likes " + favColor + ", and is at " + loc + ", feeling " + mood);

mood = "peckish";

console.log("Now, " +username + " still likes " + favColor + ", and is at " + loc + ", feeling " + mood);




// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
let companyName = "Big Burger";
const foundingYear = 223;
let isActive = true;
let fundingAmt;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmt);




// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let tempF = 35;
let tempC = (tempF - 32)/1.8;
console.log("In Celsius: " + tempC);



// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
let billAmt = 58.4
let tipPercent = 10;
let tipAmt = billAmt * (tipPercent / 100);
let total = billAmt + tipAmt;

console.log(total);



// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
// Write code below 💖

// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely

let numSongs = 142;
let avgSongLength = 3.5;
let totalMinutes = numSongs * avgSongLength;
console.log("Total minutes --> " + totalMinutes);
let hours = totalMinutes / 60;
let minutesRemain = totalMinutes % 60;
//I looked up this handy .toFixed() method to make it look nice
console.log("\nHH:MM --> "+ hours.toFixed(0) + ":" + minutesRemain.toFixed(2));