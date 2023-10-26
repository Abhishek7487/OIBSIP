const screenSize = window.innerWidth;

if (screenSize > 1190) {
  gsap.from(".homeImg", { x: -100, duration: 1, opacity: 0 });
  gsap.from(".headline", { y: -50, duration: 1, opacity: 0 });
  gsap.from(".homeText h1", { y: -50, duration: 1, opacity: 0 });
  gsap.from(".homeText p", { y: 50, duration: 1, opacity: 0 });

  gsap.from(".aboutCard", {
    duration: 1,
    y: 400,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".aboutCard",
      start: "-100% center",
      end: "-25% center",
      scrub: true,
      markers: true,
    },
  });

  gsap.from(".book1", {
    duration: 1,
    x: -100,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".books",
      start: "-70% center",
      end: "20% center",
      scrub: true,
      markers: true,
    },
  });
  gsap.from(".book2", {
    duration: 1,
    x: -50,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".books",
      start: "-70% center",
      end: "20% center",
      scrub: true,
      markers: true,
    },
  });
  gsap.from(".book3", {
    duration: 1,
    x: 50,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".books",
      start: "-70% center",
      end: "20% center",
      scrub: true,
      markers: true,
    },
  });
  gsap.from(".book4", {
    duration: 1,
    x: 100,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".books",
      start: "-70% center",
      end: "20% center",
      scrub: true,
      markers: true,
    },
  });

  gsap.from(".dreamCard", {
    duration: 1,
    scale: 0.7,
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".dream",
      start: "top center",
      end: "center center",
      scrub: true,
      markers: true,
    },
  });
}

// Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
