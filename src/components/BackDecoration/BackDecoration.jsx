import React, { useEffect } from "react";
import "./BackDecoration.scss"
import gsap from "gsap";

const BackDecoration = () => {

    useEffect(() => {
        gsap.from(".backDecoration", {height: 0, duration: 1, delay: 3})
    }, [])
  return (
    <div className="backDecoration">
      <div className="borders"></div>
    </div>
  );
};

export default BackDecoration;
