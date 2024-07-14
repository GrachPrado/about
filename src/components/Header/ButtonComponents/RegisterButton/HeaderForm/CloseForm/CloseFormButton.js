// Checked
import React from "react";

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

export default React.memo(CloseFormButton);
