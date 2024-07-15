// checked 15/07/2024
import React from "react";
import PropTypes from "prop-types";

function FormTitle({
  className,
  mainTitle,
  spanContent,
  description,
}) {
  return (
    <>
      <h2 className={className} id="formTitle">
        {mainTitle} <span>{spanContent}</span>
      </h2>
      <p className="formDesc">{description}</p>
    </>
  );
}

// Define PropTypes for type checking
FormTitle.propTypes = {
  className: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  spanContent: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(FormTitle);
