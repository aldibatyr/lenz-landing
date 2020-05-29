import React from "react";
import "./App.scss";
import logo from "./assets/Lenz_logo_final3.png"

function App() {
  return (
    <div className="App">
      <div className="backDecoration">
        <div className="borders">

        </div>
      </div>
      <div className="heroBodyContent">
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
        <div className="heroBody">
          <div className="row1">
            <div className="largeText">
              <span>Архитекторы</span>
              <span>с иным</span>
              <span>видением.</span>
            </div>
            <div className="mainInfo">
              <div className="mainInfoRow">
                <div className="mainInfoRowItem">
                  <span className="mainInfoLargeText">12</span>
                  <span>Лет</span>
                  <span>в бизнесе</span>
                </div>
                <div className="mainInfoRowItem">
                  <span className="mainInfoLargeText">357</span>
                  <span>Выполненых</span>
                  <span>проектов</span>
                </div>
                <div className="mainInfoRowItem">
                  <span className="mainInfoLargeText">19</span>
                  <span>Международных</span>
                  <span>наград</span>
                </div>
              </div>
              <div className="mainInfoRow">
                <div className="mainInfoText">
                  <p>
                    Основанна в Алматы, с филиалами по всему миру,{" "}
                    <br/>
                    <b>Lenz / Constructions</b> это компания в состав которой
                    входият лучшие архитекторы, дизайнеры, мыслители, и люди
                    которые знают свое дело.
                  </p>
                </div>
                <div className="ctaButton">
                  <div className="arrowIndicator">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="arrowWrapper">
              <div className="arrowDown">
                <span className="leftSide"></span>
                <span className="middlePart"></span>
                <span className="rightSide"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
