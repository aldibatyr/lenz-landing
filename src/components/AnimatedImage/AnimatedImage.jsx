import React from "react";
import dijon1 from "../../assets/Dijon+2.jpg";
import dijon2 from "../../assets/Dijon+4.jpg";
import dijon3 from "../../assets/Dijon+5.jpg";

import "./AnimatedImage.scss";
import { useEffect } from "react";
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
  const animatedImageTimeline = gsap.timeline();
  const nextImageTimeline = gsap.timeline();

  const animation = () => {
    animatedImageTimeline
      .from(".solidColor", {
        x: -600,
        duration: 1,
        delay: 3,
      })
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
      .from(".projectInfo", { y: 300 });
  };

  const nextImageAnimation = () => {
    nextImageTimeline
      .fromTo(".projectInfo", { y: 0 }, { y: 300 })
      .to(".backgroundImage", {
        width: 0,
        duration: 1,
      });
    return;
  };

  const nextAnimationStepTwo = () => {
    nextImageTimeline
      .to(".backgroundImage", {
        width: 450,
        duration: 1,
      })
      .fromTo(".actualImage", { scale: 1 }, { scale: 1.3 }, "-=0.6")
      .to(".projectInfo", { y: 0 });
  };

  useEffect(() => {
    animation();
  }, []);

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

  // const hoverTranslate = () => {

  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     incrementIndex();
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

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
