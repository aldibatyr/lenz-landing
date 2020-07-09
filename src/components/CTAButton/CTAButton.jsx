import React from "react";
import gsap from "gsap";
import "./CTAButton.scss";
import ArrowIndicator from "../ArrowIndicator/ArrowIndicator";

const CTAButton = ({ toggleQuoteForm }) => {
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
      onClick={toggleQuoteForm}
    >
      <p className="hidden">Оставить Заявку</p>
      <ArrowIndicator />
    </div>
  );
};

export default CTAButton;
