// checked 15/07/2024
import React from "react";
import PropTypes from "prop-types";

function FormButtonSubmit({
  name,
  telephone,
  className,
  type = "button",
  Icon,
  children,
}) {
  const isFormValid = () => {
    return name.trim() !== "" && telephone.length >= 19;
  };

  const backgroundColor = isFormValid() ? "#ffd540" : "#e0e0e0";

  return (
    <button
      className={className}
      type={type}
      style={{ backgroundColor }}
      disabled={!isFormValid()} // Uncomment to disable the button when the form is invalid
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}

// Define PropTypes for type checking
FormButtonSubmit.propTypes = {
  name: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  Icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

export default React.memo(FormButtonSubmit);
