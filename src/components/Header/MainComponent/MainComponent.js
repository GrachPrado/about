// checked 15/07/2024
import React, { useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import BurgerButton from "../ButtonComponents/BurgerButton/BurgerButton";
import RegisterButton from "../ButtonComponents/RegisterButton/RegisterButton";
import './MainComponent.scss';
import "../NavigationMenu/NavigationStyles/NavigationPC.scss";

function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const className = `header__nav ${isOpen ? "active" : ""}`;

  return (
    <header>
      <div className="header">
        <HeaderLogo />
        <NavigationMenu className={className} />
        <RegisterButton className="register-button" description="записатись" />
        <BurgerButton isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </header>
  );
}

export default MainComponent;
