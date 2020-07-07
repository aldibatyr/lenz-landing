import React, { useEffect } from "react";
import gsap from "gsap";
import "./CTAButton.scss";

const CTAButton = () => {
  // const [mouseEntered, setMouseEntered] = useState(false);
  useEffect(() => {
    gsap.from(".ctaButton", { scale: 0, ease: "back.inOut", delay: "3.1" });
  });

  const animateOnHover = () => {
    gsap.to(".ctaButton", { y: -5, duration: 0.1 });
  };

  const animateOffHover = () => {
    gsap.to(".ctaButton", { y: 5, duration: 0.1 });
  };
  return (
    <div
      className="ctaButton"
      onMouseEnter={animateOnHover}
      onMouseLeave={animateOffHover}
    >
      <p className="hidden">Оставить Заявку</p>
      <div className="arrowIndicator">
        <span className="topArrow"></span>
        <span className="bottomArrow"></span>
      </div>
    </div>
  );
};

export default CTAButton;
