import React from "react";
import ArrowDown from "../ArrowDown/ArrowDown";
import LargeText from "../LargeText/LargeText";
import MainIfo from "../MainInfo/MainIfo";
import CTAButton from "../CTAButton/CTAButton";
import './HeroBody.scss'

const HeroBody = () => {
  return (
    <div className="heroBody">
      <div className="row1">
        <LargeText />
        <MainIfo />
      </div>
      <div className="row2">
        <ArrowDown />
        <CTAButton />
      </div>
      <div className="row3"></div>
    </div>
  );
};

export default HeroBody;
