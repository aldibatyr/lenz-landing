import React from "react";
import dijon1 from "../../assets/Dijon+2.jpg";
import dijon2 from "../../assets/Dijon+4.jpg";
import dijon3 from "../../assets/Dijon+5.jpg";
import "./AnimatedImage.scss";
import gsap from "gsap";
import { useState } from "react";
import ArrowDown from "../ArrowDown/ArrowDown";
import { useRef } from "react";

const animatableObjects = [
  {
    image: dijon1,
    title: "DIJON ALMATY",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend pharetra nisl, ac sodales orci blandit vel. Sed nec turpis dictum, viverra libero tempus, dictum tortor. In in augue eu nisl tristique euismod. Nunc lacinia dolor sed sapien maximus eleifend.",
  },
  {
    image: dijon2,
    title: "FEATURED IN",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend pharetra nisl, ac sodales orci blandit vel. Sed nec turpis dictum, viverra libero tempus, dictum tortor. In in augue eu nisl tristique euismod. Nunc lacinia dolor sed sapien maximus eleifend.",
  },
  {
    image: dijon3,
    title: "AWARDS IN",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend pharetra nisl, ac sodales orci blandit vel. Sed nec turpis dictum, viverra libero tempus, dictum tortor. In in augue eu nisl tristique euismod. Nunc lacinia dolor sed sapien maximus eleifend.",
  },
];

const AnimatedImage = () => {
  const container = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImageTimeline = gsap.timeline();

  const nextImageAnimation = () => {
    nextImageTimeline
      .fromTo(".projectInfo", { y: 0 }, { y: 300 })
      .to(".backgroundImage", {
        width: 0,
        duration: 1,
        ease: "power1.out",
      });
    return;
  };

  const nextAnimationStepTwo = () => {
    nextImageTimeline
      .to(".backgroundImage", {
        width: '100%',
        duration: 1,
        ease: "power1.out",
        delay: 0.2,
      })
      .fromTo(".actualImage", { scale: 1 }, { scale: 1.3 }, "-=0.6")
      .to(".projectInfo", { y: 0, duration: 0.5, ease: "power1.inOut" });
  };

  const handleNextClick = async () => {
    const step = await nextImageAnimation();
    const step2 = await setTimeout(() => {
      incrementIndex(step);
    }, 840);
    nextAnimationStepTwo(step2);
  };

  const handleMouseMove = (e) => {
    parallax(e, ".actualImage", -30);
  };

  const parallax = (e, target, movement) => {
    let parent = container.current.getBoundingClientRect();
    let relX = e.pageX - parent.left;
    let relY = e.pageY - parent.top;

    gsap.to(target, 1, {
      x: ((relX - parent.width / 2) / parent.width) * movement,
      y: ((relY - parent.height / 2) / parent.height) * movement,
    });
  };

  const incrementIndex = (emptyObj) => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
      console.log("incrementing");
    } else {
      setCurrentIndex(0);
      console.log("reseting");
    }
    console.log("step2 finished");
    return {};
  };

  return (
    <div
      ref={container}
      className="backgroundImageContaner"
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div className="solidColor"></div>
      <div className="backgroundImage">
        <div className="projectInfo">
          <div className="projectText">
            <span>{animatableObjects[currentIndex].title}</span>
            <p>{animatableObjects[currentIndex].text}</p>
          </div>
          <div className="nextButton" onClick={handleNextClick}>
            <ArrowDown />
          </div>
        </div>
        <img
          className="actualImage"
          src={animatableObjects[currentIndex].image}
          alt="decorative background"
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
