import React from "react";
import "./AnimatableOverlay.scss";

const AnimatableOverlay = () => {
  return (
    <div className="overlayFullScreen">
      <div className="animatableSquare">
        <div className="animatableRow animRowFive">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
        <div className="animatableRow animRowFour">
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
          <div className="small"></div>
        </div>
        <div className="animatableRow animRowThree">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
        <div className="animatableRow animRowTwo">
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
          <div className="small"></div>
        </div>
        <div className="animatableRow animRowOne">
          <div className="small"></div>
          <div className="animatableBrick"></div>
          <div className="animatableBrick"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatableOverlay;
