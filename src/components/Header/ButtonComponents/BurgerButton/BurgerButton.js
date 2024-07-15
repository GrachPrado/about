// checked 15/07/2024
import React from "react";
import PropTypes from "prop-types";
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

// Define PropTypes for type checking
BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default React.memo(BurgerButton);
