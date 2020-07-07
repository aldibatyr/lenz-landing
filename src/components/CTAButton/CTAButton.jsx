import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "./CTAButton.scss";

const CTAButton = () => {
  useEffect(() => {
    gsap.from(".ctaButton", { scale: 0, ease: "back.inOut", delay: "3.1" });
  });
  return (
    <div className="ctaButton">
      <p className="hidden">Оставить Заявку</p>
      <div className="arrowIndicator">
        <span className="topArrow"></span>
        <span className="bottomArrow"></span>
      </div>
    </div>
  );
};

export default CTAButton;
