import React from "react";
import LargeText from "../LargeText/LargeText";
import MainIfo from "../MainInfo/MainIfo";
import CTAButton from "../CTAButton/CTAButton";
import "./HeroBody.scss";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

const HeroBody = () => {
  return (
    <div className="heroBody">
      <div className="columnLeft">
        <LargeText />
        <MainIfo />
        <CTAButton />
      </div>
      <AnimatedImage />
    </div>
  );
};

export default HeroBody;
