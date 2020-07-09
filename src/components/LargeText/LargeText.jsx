import React, { useEffect } from "react";
import gsap from "gsap";
import "./LargeText.scss";

const LargeText = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(".line1", { x: -100, opacity: 0 }, "+=2.8")
      .from(".line2", { x: -100, opacity: 0 }, "3.2")
      .from(".line3", { x: -100, opacity: 0 }, "3.3");
  }, []);
  return (
    <div className="largeText">
      <span className="line1">Строительство</span>
      <span className="line2">с иным</span>
      <span className="line3">видением.</span>
    </div>
  );
};

export default LargeText;
