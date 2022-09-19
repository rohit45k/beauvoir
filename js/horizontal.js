// function scrollHorizontally(e) {
//     e = window.event || e;
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
//     document.documentElement.scrollLeft -= (delta * scrollSpeed);
//     document.body.scrollLeft -= (delta * scrollSpeed);
//     e.preventDefault();
//   }

//   document.getElementById("projects").addEventListener("wheel", scrollHorizontally);

// var vwWidth = window.innerWidth;

// console.log(vwWidth);

// const projects = 7
// const projectWidth = (document.querySelector(".projects").getBoundingClientRect().width) / projects;

// var controller = new ScrollMagic.Controller();

// var parallaxScrolling = new TimelineMax()
//   .to(".section1", 1, {y: 10, ease: Power1.easeOut})

// new ScrollMagic.Scene({
//   triggerElement: ".section1",
//   duration: "100%",
//   offset: 0,
//   triggerHook: 0
// })
// .setTween(parallaxScrolling)
// .addTo(controller)

// var horizontalSlide = new TimelineMax()
//   .to(".section2", 0.1,   {x: 0, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -2*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -2*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -3*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -3*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -4*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -4*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -5*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -5*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 1,   {x: -6.4*projectWidth, ease: Power1.easeOut}, )
//   .to(".section2", 0.1,   {x: -6.4*projectWidth, ease: Power1.easeOut}, )

// new ScrollMagic.Scene({
//   triggerElement: ".section2",
//   duration: "350%",
//   offset: 0,
//   triggerHook: -0.02
// })
// .setPin('.section2')
// .setTween(horizontalSlide)
// .addTo(controller)

// working with glitch
// const projects = document.getElementById("projects");

// projects.addEventListener("wheel", (e) => {
//     projects.scrollLeft += e.deltaY;
//     e.preventDefault();
// })

const animate = () => {
  if (window.innerWidth > 1200) {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".project");
    let container = document.querySelector(".projects");
    const endWidth =
      container.offsetWidth + document.querySelector(".project").offsetWidth;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 0.2),
      ease: "none",
      //   duration: 6,
      scrollTrigger: {
        trigger: ".projects",
        pin: true,
        scrub: true,
        end: `+=${endWidth}`,
      },
    });
  }
};

animate();

window.addEventListener("resize", () => {
  animate();
});

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".project");
// let container = document.querySelector('.projects')

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".projects",
//       pin: true,
//       scrub: 0.1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: `+=${container.offsetWidth}`
//     }
//   });
