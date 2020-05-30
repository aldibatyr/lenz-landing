import React, { useEffect } from "react";
import gsap from "gsap";

const LargeText = () => {
  let tl = gsap.timeline()

  useEffect(() => {
    tl.from(".line1", {x: -100, opacity: 0, delay: "0.3"})
    .from(".line2", {x: -100, opacity: 0}, "0.4")
    .from(".line3", {x: -100, opacity: 0}, "0.5")
  })
  return (
    <div className="largeText">
      <span className="line1">Архитекторы</span>
      <span className="line2">с иным</span>
      <span className="line3">видением.</span>
    </div>
  );
};

export default LargeText;
