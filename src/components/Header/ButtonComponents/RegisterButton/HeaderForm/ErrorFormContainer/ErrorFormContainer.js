// Checked
import React from "react";
import FormTitle from "../FormTitle/FormTitle";
import './error__container-crossMark.scss';

function ErrorFormContainer({ toggle }) {
  return (
    <div
      className="error__container"
      role="dialog"
      aria-labelledby="formTitle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193 193"
        fill="none"
        className="error__container-crossMark"
      >
        <circle opacity="0.2" cx="96.5" cy="96.5" r="96.5" fill="#FFD540" />
        <path
          d="M70 70 L123 123 M123 70 L70 123"
          stroke="#FF4D4D"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
      <FormTitle
        className={"error__container-title"}
        mainTitle={"Заявка неуспішна"}
        spanContent={"Формат номеру має бути:"}
        description={`(+380)-11-111-11-11:`}
      />
      <button
        className="success__container-close"
        onClick={toggle}
        type="button"
      >
        Повернутись
      </button>
    </div>
  );
}

export default React.memo(ErrorFormContainer);
