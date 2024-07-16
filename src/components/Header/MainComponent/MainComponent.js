// CHECKED 15/07/2024
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom"; // Correct import
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import BurgerButton from "../ButtonComponents/BurgerButton/BurgerButton";
import RegisterButton from "../ButtonComponents/RegisterButton/RegisterButton";
import './MainComponent.scss';
import "../NavigationMenu/NavigationStyles/NavigationPC.scss";

function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const location = useLocation();


  const handleSwipe = useCallback(() => {
    if (touchStartX.current - touchEndX.current > 5) {
      setIsOpen(false);
    }
  }, []);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  }, [handleSwipe]);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchend", handleTouchEnd);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, handleClickOutside, handleTouchStart, handleTouchEnd]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);


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
