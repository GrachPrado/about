// checked 15/07/2024
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Icon } from "../RegisterButtonImage/punch.svg";
import FormTitle from "./FormTitle/FormTitle";
import InputFieldName from "./InputFields/InputFieldName";
import InputFieldPhone from "./InputFields/InputFieldPhone";
import FormButtonSubmit from "./FormSubmit/FormButtonSubmit";
import CloseFormButton from "./CloseForm/CloseFormButton";

const HeaderForm = ({ getOpacity, toggle, submit }) => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submit({ name, telephone });
  };

  return (
    <div
      className="register-button__popup"
      role="dialog"
      aria-labelledby="formTitle"
    >
      <form
        onSubmit={handleFormSubmit}
        className="register-button__form"
        aria-describedby="formDesc"
      >
        <FormTitle
          className="register-button__title"
          mainTitle="Записатись на"
          spanContent="тренування"
          description="Залиште заявку та ми з вами зв'яжимось"
        />
        <InputFieldName
          setName={setName}
          label="Ваше ім'я:"
          name="name"
          type="text"
          placeholder="ваше ім'я"
          value={name}
          style={getOpacity(name)}
        />
        <InputFieldPhone
          setTelephone={setTelephone}
          label="Телефон:"
          name="telephone"
          type="tel"
          placeholder="+380"
          value={telephone}
          style={getOpacity(telephone)}
        />
        <FormButtonSubmit
          name={name}
          telephone={telephone}
          className="register-button__submit"
          type="submit"
          Icon={Icon}
        >
          відправити заявку
        </FormButtonSubmit>
      </form>
      <CloseFormButton
        className="register-button__close"
        onClick={toggle}
        type="button"
        closeTitle="закрити"
      />
    </div>
  );
};

HeaderForm.propTypes = {
  getOpacity: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default HeaderForm;


