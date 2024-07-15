// checked 15/07/2024
import React from "react";
import PropTypes from "prop-types";

function CloseFormButton({
  className,
  onClick,
  type = "button",
  children,
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      aria-label="Close"
    >
      {children || "Close"}
    </button>
  );
}

// Define PropTypes for type checking
CloseFormButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(CloseFormButton);
