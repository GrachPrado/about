// Checked
import React from "react";

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
      // disabled={!isFormValid()}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
}

export default React.memo(FormButtonSubmit);

