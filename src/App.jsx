import React from "react";
import "./App.scss";

import LargeText from "./LargeText";
import MainIfo from "./MainIfo";
import HeroImageContainer from "./HeroImageContainer";
import Navigation from "./Navigation";
import AnimatableOverlay from "./animatableOverlay/AnimatableOverlay";

function App() {
  return (
    <>
    <AnimatableOverlay />
    <div className="App">
      <div className="backDecoration">
        <div className="borders"></div>
      </div>
      <div className="heroBodyContent">
        <Navigation />
        <div className="heroBody">
          <div className="row1">
            <LargeText/>
            <MainIfo />
          </div>
          <div className="row2">
            <div className="arrowWrapper">
              <div className="arrowDown">
                <span className="leftSide"></span>
                <span className="middlePart"></span>
                <span className="rightSide"></span>
              </div>
            </div>
            <HeroImageContainer />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
