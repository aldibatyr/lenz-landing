import gsap from "gsap";

let tl = gsap.timeline();
const animation = () => {
  tl.from([".animatableRow"], {
    y: 300,
    stagger: 0.2,
    duration: 0.6,
    ease: "power4.inOut",
  })
    .to(".overlayFullScreen", {
      y: "-100vh",
      ease: "power4.inOut",
      duration: 1,
    })
    .from([".navLink"], { y: -50, opacity: 0, stagger: 0.1 })
    .from(".top", { x: 10, opacity: 0, duration: 0.2 })
    .from(".bottom", { x: -10, opacity: 0, duration: 0.2 }, "-=0.2")
    .from([".line"], { x: -100, opacity: 0, stagger: 0.2 }, "-=0.5")
    .from(["#rowItem"], { x: -100, opacity: 0, stagger: 0.05 }, "-=0.4")
    .from(
      ["#rowItemSmallerText"],
      { x: -100, opacity: 0, stagger: 0.05 },
      "-=0.4"
    )
    .from(".mainInfoText", { x: -100, opacity: 0 }, "-=0.4")
    .from(".ctaButton", { scale: 0, ease: "back.inOut" }, "-=0.8")
    .from(
      ".solidColor",
      {
        x: -600,
        duration: 1,
      },
      "-=0.8"
    )
    .from(
      ".backgroundImage",
      {
        width: 0,
        duration: 1,
      },
      "-=0.4"
    )
    .to(".actualImage", { scale: 1.3 }, "-=0.6")
    .to(".actualImage", { css: { className: "+=actualImage infiniteZoom" } })
    .from(".projectInfo", { y: 300 }, "-=0.6")
    .from(".backDecoration", {height: 0, duration: 1}, "-=0.8");
};

export default animation;
