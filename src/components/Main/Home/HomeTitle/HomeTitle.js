import React from "react";
import "./HomeTitle.scss";
import coach from "./HomeImage/secondary_coach.jpg";
import Icon from "../../../Header/ButtonComponents/RegisterButton/RegisterButtonImage/punch.svg";
import RegisterButton from "../../../Header/ButtonComponents/RegisterButton/RegisterButton";

function HomeTitle() {
  return (
    <section className="home">
      <div className="home__left">
    {/*Title*/}
      <div className="home__title" >
        <div className="home__title-main"><h1>тренуйся<br/>як справжній <span>чемпіон</span></h1></div>
        <div className="home__title-description">
          <p>Професійний спорт або заняття для себе,<br/>заходячи в зал – ти вже стаєш сильнішим,<br/>
          подолавши свої страхи, сумніви та слабкості.
          </p>
        </div>
      </div>
    {/*Subscription__button*/}
      <RegisterButton className={"home__title-button"} description={"записатись на тренування"}>
      <img src={Icon} alt="punch"/>
      </RegisterButton>
      </div>
          {/*Image*/}
          <div className="home__title-image" >
            <img src={coach} alt="coach"/>
      </div>
    </section>
  );
}

export default HomeTitle;
