// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Your Name]
// Date: [Date]
// ============================================

// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}



// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------

let hour = 11;
if (hour < 12) {
  console.log("Good morning 🌞");
  console.log("You should brush your teeth");
}


// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
if (hour < 12) {
  console.log("Good morning 🌞");
  console.log("You should brush your teeth");

}
else {
  console.log("Good afternoon ☁️");
  console.log("Pick a book from your shelf to read.")
}


// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 18;
if(ph > 7) {
  console.log("Basic");
}
else if (ph < 7){
  console.log("Acidic");
}
else{
  console.log("Neutral");
}



// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
let question = "Should I watch the entire LotR trilogy (extended editions) instead of doing my homework?";
console.log("Question: " + question)

let answer = Math.floor(Math.random() * 10);
if(answer === 0){
  console.log("Magic 8 Ball: Yes, definitely");
}
else if(answer === 1){
  console.log("Magic 8 Ball: It is decidedly so.");
}
else if(answer = 2){
  console.log("Magic 8 Ball: Without a doubt.");
}
else if(answer === 3){
  console.log("Magic 8 Ball: Reply hazy, try again");
}
else if(answer === 4){
  console.log("Magic 8 Ball: Ask again later");
}
else if(answer === 5){
  console.log("Magic 8 Ball: Better not tell you now");
}
else if(answer === 6){
  console.log("Magic 8 Ball: My sources say no");
}
else if(answer === 7){
  console.log("Magic 8 Ball: Outlook not so good");
}
else if(answer === 8){
  console.log("Magic 8 Ball: Very doubtful");
}
else {
  console.log("Magic 8 Ball: Duh. Did you even need to ask?");
}



// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
let aqi = 52;

if(aqi <= 50){
  console.log("Good")
}
else if (aqi >= 51 && aqi <= 100){
  console.log("Moderate");
}
else if (aqi >= 101 && aqi <= 150){
  console.log("Unhealthy (Sensative Groups)");
}
else if (aqi >= 151 && aqi <= 200){
  console.log("Unhealthy");
}
else if (aqi >= 201 && aqi <= 300){
  console.log("Very Unhealthy");
}
else {
  console.log("Hazardous");
}



// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
let player = 2; //0 = Rock, 1 = Paper, 2 = Scissors
let computer = Math.floor(Math.random() * 3);

if(player === 0){
  console.log("Player picked: Rock");
  if(computer === 1){
    console.log("Computer picked: Paper");
    console.log("\nThe computer won!");
  }
  else if (computer === 2) {
    console.log("Computer picked: Scissors");
    console.log("\nThe player won!");
  }
  else{
    console.log("Computer picked: Rock");
    console.log("\nDraw!");
  }
}
else if(player === 1){
  console.log("Player picked: Paper");
  if(computer === 1){
    console.log("Computer picked: Paper");
    console.log("\nDraw!");
  }
  else if (computer === 2) {
    console.log("Computer picked: Scissors");
    console.log("\nThe computer won!");
  }
  else{
    console.log("Computer picked: Rock");
    console.log("\nThe player won!");
  }
}
else { //player = 2 = scissors
  console.log("Player picked: Scissors");
  if(computer === 1){
    console.log("Computer picked: Paper");
    console.log("\nThe player won!");
  }
  else if (computer === 2) {
    console.log("Computer picked: Scissors");
    console.log("\nDraw!");
  }
  else{
    console.log("Computer picked: Rock");
    console.log("\nThe computer won!");
  }
}