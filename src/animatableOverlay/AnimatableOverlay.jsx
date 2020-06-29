import React from "react";
import "./AnimatableOverlay.scss";
import gsap from "gsap";
import { useEffect } from "react";

const AnimatableOverlay = () => {
  let tl = gsap.timeline();

  // useEffect(() => {
  //   tl.from('.aniatableSquare', {opacity: 0, duration: 0.1})
  //     .from('.animRowOne', {x: -300, ease: 'power4.inOut'}, '-=0.1')
  //     .from('.animRowTwo', {x: 300, ease: 'power4.inOut'}, '-=0.1')
  //     .from('.animRowThree', {x: -300, ease: 'power4.inOut'}, '-=0.1')
  //     .from('.animRowFour', {x: 300, ease: 'power4.inOut'}, '-=0.1')
  //     .from('.animRowFive', {x: -300, ease: 'power4.inOut'}, '-=0.1')
  //     .to('.overlayFullScreen', {y: '-100vh', ease: 'power4.inOut', duration: 0.8})
  // }, [])

  useEffect(() => {
    tl.from([".animatableRow"], {
      y: 300,
      stagger: 0.2,
      duration: 0.6,
      ease: "power4.inOut",
    }).to(".overlayFullScreen", {
      y: "-100vh",
      ease: "power4.inOut",
      duration: 1,
    });
  }, []);
  return (
    <div className="overlayFullScreen">
      <div className="animatableSquare">
        <div className="animatableRow animRowFive">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
        <div className="animatableRow animRowFour">
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
          <div className="small"></div>
        </div>
        <div className="animatableRow animRowThree">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
        <div className="animatableRow animRowTwo">
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
          <div className="small"></div>
        </div>
        <div className="animatableRow animRowOne">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatableOverlay;
