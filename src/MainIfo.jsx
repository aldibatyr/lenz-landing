import React, { useEffect } from "react";
import gsap from "gsap";

const MainIfo = () => {

  useEffect(() => {
    gsap.from("#rowItemOne", { x: 100, opacity: 0, delay: "2.8" });
    gsap.from("#rowItemSmallerTextOne", { x: 100, opacity: 0, delay: "2.85" });
    gsap.from("#rowItemTwo", { x: 100, opacity: 0, delay: "2.9" });
    gsap.from("#rowItemSmallerTextTwo", { x: 100, opacity: 0, delay: "2.95" });
    gsap.from("#rowItemThree", { x: 100, opacity: 0, delay: "3" });
    gsap.from("#rowItemSmallerTextThree", {
      x: 100,
      opacity: 0,
      delay: "3.05",
    });
    gsap.from(".mainInfoText", { x: 100, opacity: 0, delay: "3.15" });
    gsap.from(".ctaButton", { scale: 0, ease: "back.inOut", delay: "3.1" });
  });
  return (
    <div className="mainInfo">
      <div className="mainInfoRow">
        <div className="mainInfoRowItem">
          <span id="rowItemOne" className="mainInfoLargeText">
            7
          </span>
          <div id="rowItemSmallerTextOne" className="smallerText">
            <span>Лет</span>
            <span>в бизнесе</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItemTwo" className="mainInfoLargeText">
            40k ㎡
          </span>
          <div id="rowItemSmallerTextTwo" className="smallerText">
            <span>Выполненых</span>
            <span>проектов</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItemThree" className="mainInfoLargeText">
            17
          </span>
          <div id="rowItemSmallerTextThree" className="smallerText">
            <span>Международных</span>
            <span>наград</span>
          </div>
        </div>
      </div>
      <div className="mainInfoRow">
        <div className="mainInfoText">
          <p>
            <b>Lenz / Construction</b> это компания в состав которой входит
            лучшая команда строителей, архитекторов и мыслителей, люди которые
            знают свое дело.
          </p>
        </div>
        <div className="ctaButton">
          <p className='hidden'>Оставить Заявку</p>
          <div className="arrowIndicator">
            <span className="topArrow"></span>
            <span className="bottomArrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIfo;
