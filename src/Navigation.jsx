import React, { useEffect } from "react";
import logo from "./assets/Lenz_logo_final3.png";
import gsap from "gsap";

const Navigation = () => {

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from('nav', {y: -100, opacity: 0})
  }, [])


  return (
    <nav>
      <img src={logo} alt="lenz logo" />
      <div className="flexibleSpace"></div>
      <div className="navigationLinks">
        <ul>
          <li>Награды</li>
          <li>Портфолио</li>
          <li>Стоимость</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="drawerMenuToggle">
        <span className="top"></span>
        <span className="bottom"></span>
      </div>
    </nav>
  );
};

export default Navigation;
