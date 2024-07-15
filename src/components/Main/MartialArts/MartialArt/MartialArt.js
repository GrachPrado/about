import React from "react";
import "./martialArt.scss";
import Icon from "../../../Header/ButtonComponents/RegisterButton/RegisterButtonImage/punch.svg";
import RegisterButton from "../../../Header/ButtonComponents/RegisterButton/RegisterButton";

function MartialArt({ art, artDesc, artPng, top }) {
  return (
    <section className={`martialArt ${top}`}>
      <div className="martialArt__title">
        <div className="martialArt__title-main">
          <h4>{art}</h4>
        </div>
        <div className="martialArt__title-description">{artDesc}</div>
        <RegisterButton
          className="martialArt__title-button"
          description="записатись на тренування"
        >
          <img src={Icon} alt="Register for training" loading="lazy"/>
        </RegisterButton>
      </div>
      <div className="martialArt__title-image">
        <img src={artPng} alt={`${art}`} loading="lazy"/>
      </div>
    </section>
  );
}

export default MartialArt;
