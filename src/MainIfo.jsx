import React, { useEffect } from "react";
import gsap from "gsap";

const MainIfo = () => {
  useEffect(() => {
    gsap.from("#rowItemOne", { x: 100, opacity: 0 });
    gsap.from("#rowItemSmallerTextOne", { x: 100, opacity: 0, delay: "0.05" });
    gsap.from("#rowItemTwo", { x: 100, opacity: 0, delay: "0.1" });
    gsap.from("#rowItemSmallerTextTwo", { x: 100, opacity: 0, delay: "0.15" });
    gsap.from("#rowItemThree", { x: 100, opacity: 0, delay: "0.2" });
    gsap.from("#rowItemSmallerTextThree", { x: 100, opacity: 0, delay: "0.25" });
    gsap.from(".mainInfoText", { x: 100, opacity: 0, delay: "0.15" });
    gsap.from(".ctaButton", { scale: 0, ease: "back.inOut", delay: "0.1" });
  });
  return (
    <div className="mainInfo">
      <div className="mainInfoRow">
        <div className="mainInfoRowItem">
          <span id="rowItemOne" className="mainInfoLargeText">12</span>
          <div id="rowItemSmallerTextOne" className="smallerText">
            <span>Лет</span>
            <span>в бизнесе</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItemTwo" className="mainInfoLargeText">357</span>
          <div id="rowItemSmallerTextTwo" className="smallerText">
            <span>Выполненых</span>
            <span>проектов</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItemThree" className="mainInfoLargeText">19</span>
          <div id="rowItemSmallerTextThree" className="smallerText">
            <span>Международных</span>
            <span>наград</span>
          </div>
        </div>
      </div>
      <div className="mainInfoRow">
        <div className="mainInfoText">
          <p>
            Основанна в Алматы, с филиалами по всему миру, <br />
            <b>Lenz / Constructions</b> это компания в состав которой входият
            лучшие архитекторы, дизайнеры, мыслители, и люди которые знают свое
            дело.
          </p>
        </div>
        <div className="ctaButton">
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
