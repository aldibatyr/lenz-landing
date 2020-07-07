import React from "react";
import "./App.scss";

// import HeroImageContainer from "./HeroImageContainer/HeroImageContainer";
import Navigation from "./components/Navigation/Navigation";
import AnimatableOverlay from "./components/AnimatableOverlay/AnimatableOverlay";
import BackDecoration from "./components/BackDecoration/BackDecoration";
import HeroBody from "./components/HeroBody/HeroBody";

function App() {
  return (
    <>
      <AnimatableOverlay />
      <div className="App">
        <BackDecoration />
        <div className="heroBodyContent">
          <Navigation />
          <HeroBody />
        </div>
      </div>

      {/* <HeroImageContainer /> */}
    </>
  );
}

export default App;
