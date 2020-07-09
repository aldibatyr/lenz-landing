import React from "react";
import "./MainInfo.scss";

const MainIfo = () => {
  return (
    <div className="mainInfo">
      <div className="mainInfoRow">
        <div className="mainInfoRowItem">
          <span id="rowItem" className="mainInfoLargeText">
            7
          </span>
          <div id="rowItemSmallerText" className="smallerText">
            <span>Лет</span>
            <span>в бизнесе</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItem" className="mainInfoLargeText">
            40k ㎡
          </span>
          <div id="rowItemSmallerText" className="smallerText">
            <span>Выполненых</span>
            <span>проектов</span>
          </div>
        </div>
        <div className="mainInfoRowItem">
          <span id="rowItem" className="mainInfoLargeText">
            17
          </span>
          <div id="rowItemSmallerText" className="smallerText">
            <span>Международных</span>
            <span>наград</span>
          </div>
        </div>
      </div>
      <div className="mainInfoRow">
        <div className="mainInfoText">
          <p>
            <span className="companyName">Lenz / Construction</span> это
            компания в состав которой входит лучшая команда строителей,
            архитекторов и мыслителей, люди которые знают свое дело.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainIfo;
