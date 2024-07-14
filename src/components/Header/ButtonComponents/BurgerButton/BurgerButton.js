// checked
import React from "react";
import "./BurgerButtonStyles/BurgerButton.scss";

function BurgerButton({ onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`header__menu-button ${isActive ? "active" : "inactive"}`}
      aria-expanded={isActive}
      aria-label={isActive ? "Close menu" : "Open menu"}
    >
      <span className="burger-icon"></span>
    </button>
  );
}

export default React.memo(BurgerButton);

