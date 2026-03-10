gsap.registerPlugin(ScrollTrigger)

console.log("GSAP loaded:", gsap);
console.log("ScrollTrigger loaded:", ScrollTrigger);

//Generate a long string of randomly placed stars
function generateStars(count) {
  let shadows ="";
  for (let i = 0; i< count; i++){
    const x =Math.floor(Math.random()*2000);
    const y = Math.floor(Math.random()*2000);
    shadows += `${x}px ${y}px #FFF${i === count - 1 ? "" : ","}`;
  }
  return shadows;
}

//Apply the shadows (stars) to the divs
document.getElementById('stars').style.boxShadow = generateStars(700);
document.getElementById('stars2').style.boxShadow = generateStars(200);
document.getElementById('stars3').style.boxShadow = generateStars(100);

console.log("Stars applied");

//The smallest/furthest layer of stars.
gsap.to("#stars", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-scene", 
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

//The middle layer of stars.
gsap.to("#stars2", {
  y: -500,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

//The biggest/closest layer of stars.
gsap.to("#stars3", {
  y: -800,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

//Moves the planet from far out in the distance to the side of the screen
gsap.fromTo("#planet", 
  {
    scale: 0,
    xPercent: 0, 
    yPercent: -50,
    transformOrigin: "center center"
  },
  {
    scale: 1,
    xPercent: 70, 
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-scene",
      start: "top center",
      end: "250vh",
      scrub: 0.8,
      markers: true
    }
  }
);

console.log("Animations set up");