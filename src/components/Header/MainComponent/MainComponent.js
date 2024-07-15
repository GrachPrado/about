// checked 15/07/2024
import React, { useState, useEffect, useRef } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import BurgerButton from "../ButtonComponents/BurgerButton/BurgerButton";
import RegisterButton from "../ButtonComponents/RegisterButton/RegisterButton";
import './MainComponent.scss';
import "../NavigationMenu/NavigationStyles/NavigationPC.scss";

function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const className = `header__nav ${isOpen ? "active" : ""}`;

  return (
    <header ref={menuRef}>
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

