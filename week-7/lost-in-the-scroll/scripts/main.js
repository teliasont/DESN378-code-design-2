gsap.registerPlugin(ScrollTrigger)

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


// //The smallest/furthest layer of stars.
// gsap.to("#stars", {
//   y: -200,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax-scene", 
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   }
// });

// //The middle layer of stars.
// gsap.to("#stars2", {
//   y: -500,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax-scene",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   }
// });

// //The biggest/closest layer of stars.
// gsap.to("#stars3", {
//   y: -800,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax-scene",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   }
// });


//Planet zooming in effect.
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
      trigger: ".fg-text",
      start: "center center",
      end: "250vh",
      scrub: 0.8,
      // Trigger the delay once the planet is fully in frame
      onEnter: () => {
        // Resets UFO if user scrolls back up and down
        gsap.set("#ufo", { opacity: 0, x: -1200 });
      },
      onLeave: () => { //waits a tick before UFO flies in for suspense or something.
        gsap.delayedCall(0.5, flyInUFO); 
      }
    }
  }
);

function ufoFlames() {
  const fireTL = gsap.timeline({ repeat: -1 });

  fireTL
    // Show fire 1, Hide fire 2
    .set(".fire-1", { opacity: 1 })
    .set(".fire2", { opacity: 0 })
    
    // Swap fires
    .set(".fire-1", { opacity: 0 }, "+=0.5")
    .set(".fire2", { opacity: 1 }, "<")
    
    // Pause before looping back to the start so it's an even transition, and not strobing
    .set({}, {}, "+=0.5"); 
}

function flyInUFO() {
  if (gsap.getProperty("#ufo", "opacity") > 0) return;

  const ufoTL = gsap.timeline();
  ufoFlames();
  // Initial setup
  gsap.set("#ufo", { opacity: 1, x: -1200, y: 100, rotation: -5 });

  ufoTL
    //UFO zooms in from the side
    .to("#ufo", {
      duration: 2.5,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.5)",
    })
    //UFO wobbles a bit
    .fromTo("#ufo", 
      { rotation: -5 }, 
      { 
        rotation: 5,
        duration: 0.3,
        repeat: 4,     
        yoyo: true, 
        ease: "sine.inOut" 
      }, 
      "<" 
    )
    
   
    .to("#ufo", {
      rotation: 0,
      duration: 1.2,    
      ease: "power2.out" 
    }, "-=0.8") 
    //Hovers indefinitely
    .to("#ufo", {
      y: "-=30",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "-=0.5"); // Hover with slight overlap with prev animation
}

function starParallax() {
  const starTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".fg-text",
      start: "center center",
      end: "bottom bottom",
      scrub: 0.8,
      markers: true
    }
  });
  starTL.to("#stars", { y: -150, ease:"none"}, 0)
      .to("#stars2", { y:-300, ease:"none"}, "<")
      .to("stars3", {y:-450, ease: "none"}, "<");
}
starParallax();