//banner
const banner = document.querySelector(".banner-bg");
const bannerTwo = document.querySelector(".banner-bgTwo");

//header
const nav = document.querySelector(".nav");

//hero
const heroLine = document.querySelectorAll(".line span");
const heroP = document.querySelectorAll(".available");

//section
const sOne = document.querySelectorAll(".section__card");

//projects
const pTitle = document.querySelector(".projects-title");
const pList = document.querySelectorAll(".project-list li");

// timeline
const headerTimeLine = gsap.timeline();

headerTimeLine
  .from([banner, bannerTwo], {
    duration: 1.4,
    width: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .to([banner, bannerTwo], {
    opacity: 0,
  })
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
    delay: -0.7,
    y: 32,
    duration: 0.8,
    opacity: 0,
    ease: "power3.easeOut",
    stagger: {
      amount: 0.1,
    },
  });

// const cardTimeLine = gsap.timeline();
// cardTimeLine.from(sOne, {
//   delay: 1,
//   y: 32,
//   duration: 0.8,
//   opacity: 0,
//   ease: "power3.easeOut",
//   stagger: {
//     amount: 0.2,
//   },
// });

const projectsTimeLine = gsap.timeline();
projectsTimeLine
  .from(pTitle, {
    opacity: 0,
    delay: -0.6,
    y: 16,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(pList, {
    delay: -0.4,
    opacity: 0,
    y: 32,
    skewX: 15,
    duration: 0.9,
    ease: "power3.out",
    stagger: {
      amount: 0.6,
    },
  });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#two",
  triggerHook: 0,
  reverse: false,
})
  // .addIndicators()
  .setTween(projectsTimeLine)
  .addTo(controller);
