import React, { useEffect } from "react";
import gsap from "gsap";
import "./CTAButton.scss";
import ArrowIndicator from "../ArrowIndicator/ArrowIndicator";

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
      <ArrowIndicator />
    </div>
  );
};

export default CTAButton;
