import React, { useEffect } from "react";
import logo from "./assets/Lenz_logo_final3.png";
import gsap from "gsap";

const Navigation = () => {

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(['.navLink'], {y: -50, opacity: 0, stagger: 0.1})
      .from('.top', {x: 10, opacity: 0, duration: 0.2})
      .from('.bottom', {x: -10, opacity: 0, duration: 0.2}, '-=0.2')
  })


  return (
    <nav>
      <img src={logo} alt="lenz logo" />
      <div className="flexibleSpace"></div>
      <div className="navigationLinks">
        <ul>
          <li className='navLink'>Награды</li>
          <li className='navLink'>Портфолио</li>
          <li className='navLink'>Стоимость</li>
          <li className='navLink'>Контакты</li>
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
