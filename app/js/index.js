//header
const nav = document.querySelector(".nav");

//hero
const heroLine = document.querySelectorAll(".line span");
const heroP = document.querySelectorAll(".available");

//section
const sOne = document.querySelectorAll(".section__card");

// timeline
const headerTimeLine = gsap.timeline();

headerTimeLine
  .from(nav, {
    y: 32,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
  })
  .from(heroLine, {
    delay: -0.4,
    y: 80,
    duration: 0.6,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from(heroP, {
    delay: -0.6,
    y: 32,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(sOne, {
    delay: -0.4,
    y: 32,
    duration: 0.8,
    opacity: 0,
    ease: "power3.easeOut",
    stagger: {
      amount: 0.2,
    },
  });
