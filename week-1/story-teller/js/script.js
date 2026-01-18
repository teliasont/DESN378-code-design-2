// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('.story-text');
const button = document.querySelector('.btn');
const alt = document.querySelector('.story-image img').alt

// Story content
const captions = [
    //Img 1
  "The sky was drab, the color of television tuned to a dead channel.",

  //Img 2 (moves in on house)
  "The promise of an empty house is daunting. You wonder if anyone has responded to your messages.",
  "The promise of an empty house is daunting. You wonder if anyone has responded to your messages.",
  "The promise of an empty house is daunting. You wonder if anyone has responded to your messages.",

  //Img 3 (phone appears)
  "Nothing. Guess you aren't going out tonight. The doorway looms, foreboding under the porch.",
  
  //Img 4
  "Dark. It's always so dark in here. You reach for the light.",
  'The hall stays dark. "Right," you remember. "The bulb burned out this morning." Sighing, you ignore it and head to the stairs.',
  
  //Img 5
  "",
  "",
  "You hear feet shuffling and you halt mid-step.",

  //Img 6
  "You creep up the last few steps. Light emanates from behind a closed door. Gathering your nerve, you ready yourself to enter.",

  //Img 7
  '"Surprise!"\n After such a gray day, the colors astound you. Your friends are all here, adding the finishing touches to the decorations.',

  //Img 8
    "They've decorated the room in pinks and reds. You can't help but smile. This is exactly what you needed. " + '"' + "Happy Valentine's Day!" + '" everyone cheers.',
    "\nHappy Valentine's! Spend the day with people you love!\nxoxo"

];

// Images' alt text content
const altText = [
    //Img 1
  "Gray clouds hang in the sky.",

  //Img 2 (moves in on house)
  "A house stands under gray clouds",
  "",
  "",

  //Img 3 (phone appears)
  "A phone appears with no new messages.",
  
  //Img 4
  "A dark hallway.",
  "",
  
  //Img 5
  "Stairs.",
  "More stairs.",
  "More stairs.",

  //Img 6
  "A door is lit from inside.",

  //Img 7
  'Valentine decorations',

  //Img 8
    "A group celebrates Valentine's Day.",
    "Valentine's hearts."
];

// Button content
const buttonText = [
    //Img 1
  "Walk",

  //Img 2 (moves in on house)
  "Walk",
  "Walk",
  "Check your phone",

  //Img 3 (phone appears)
  "Enter the house",
  
  //Img 4
  "Turn the light on",
  "Walk up the stairs",
  
  //Img 5
  "Step up",
  "Step up",
  "Investigate the noise",

  //Img 6
  "Open the door",

  //Img 7
  "Look around",

  //Img 8
    "Enjoy the party",
    "The end"
];




// Track current step
let currentStep = 0;

// Listen for clicks
button.addEventListener('click', function() {
  currentStep++;
  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];
    image.alt = altText[currentStep];
    button.textContent =buttonText[currentStep];


    // Update image
    image.src = `assets/images/image-${currentStep + 1}.jpg`;

  }
});

