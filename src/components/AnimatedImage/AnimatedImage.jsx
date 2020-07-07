import React, { useRef, useState, useLayoutEffect } from "react";
import dijon1 from "../../assets/Dijon+2.jpg";
import dijon2 from "../../assets/Dijon+4.jpg";
import dijon3 from "../../assets/Dijon+5.jpg";
import "./AnimatedImage.scss";
import { useEffect } from "react";
import gsap from "gsap";

const AnimatedImage = () => {
  const [width, setWidth] = useState(0);
  let parent = useRef(null);

  const animatedImageTimeline = gsap.timeline();

  useEffect(() => {
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
      .to(".actualImage", { scale: 1.3 }, '-=0.6');
  }, []);

  return (
    <div ref={parent} className="backgroundImageContaner">
      <div className="solidColor"></div>
      <div className="backgroundImage">
        <img className="actualImage" src={dijon1} alt="decorative background" />
      </div>
    </div>
  );
};

export default AnimatedImage;
