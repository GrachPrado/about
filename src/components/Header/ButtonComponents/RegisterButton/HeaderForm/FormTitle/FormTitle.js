// checked
import React from "react";

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

export default React.memo(FormTitle);
