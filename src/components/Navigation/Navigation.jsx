import React from "react";
import logo from "../../assets/Lenz_logo_final3.jpeg";

const Navigation = () => {
  return (
    <>
      <nav className="largeScreen">
        <img src={logo} alt="lenz logo" />
        <div className="flexibleSpace"></div>
        <div className="navigationLinks">
          <ul>
            <li className="navLink">Награды</li>
            <li className="navLink">Портфолио</li>
            <li className="navLink">Стоимость</li>
            <li className="navLink">Контакты</li>
          </ul>
        </div>
        <div className="drawerMenuToggle">
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
      </nav>
      <nav className="mobile"></nav>
    </>
  );
};

export default Navigation;
