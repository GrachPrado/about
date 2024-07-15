// checked
import React, { useState } from "react";
import axios from "axios";
import FooterRegisterName from "./FooterRegisterName/FooterRegisterName";
import FooterRegisterPhone from "./FooterRegisterPhone/FooterRegisterPhone";
import FooterSubmitButton from "./FooterSubmitButton/FooterSubmitButton";
import ErrorFormContainer from "../../Header/ButtonComponents/RegisterButton/HeaderForm/ErrorFormContainer/ErrorFormContainer";
import SuccessFormContainer from "../../Header/ButtonComponents/RegisterButton/HeaderForm/SuccessFormContainer/SuccessFormContainer";
import "./FooterRegister.scss";

const FOOTER_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const FOOTER_CHAT_ID = process.env.REACT_APP_CHAT_ID;
const FOOTER_TOKEN = process.env.REACT_APP_TOKEN;

function FooterRegister() {
  const [footerName, setFooterName] = useState("");
  const [footerPhone, setFooterPhone] = useState("");
  const [footerError, setFooterError] = useState(false);
  const [footerSuccess, setFooterSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${FOOTER_API_ENDPOINT}/bot${FOOTER_TOKEN}/sendMessage`,
        {
          chat_id: FOOTER_CHAT_ID,
          text: `${footerName} ${footerPhone}`,
        },
      );
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const submit = async (event) => {
    event.preventDefault(); // This stops the default form submission behavior
    if (footerPhone.length < 19) {
      setFooterError(true);
      setFooterSuccess(false); // Ensure success is not indicated in case of error
    } else {
      try {
        await handleSubmit();
        setFooterSuccess(true); // Set success state only after the async operation completes successfully
        setFooterError(false); // Reset the error state in case it was previously set
      } catch (error) {
        console.error("Failed to send message:", error);
        setFooterError(true);
        setFooterSuccess(false); // Ensure success is not indicated in case of error
      }
    }
  };

  return (
    <div className="footer__register">
      <form
        onSubmit={submit}
        className="register-footer__form"
        aria-describedby="form-description"
      >
        <h2>записатись на тренування</h2>
        <FooterRegisterName
          setFooterName={setFooterName}
          name="name"
          type="text"
          placeholder="Ваше ім'я"
          value={footerName}
        />
        <FooterRegisterPhone
          setFooterPhone={setFooterPhone}
          name="telephone"
          type="tel"
          placeholder="+380"
          value={footerPhone}
        />
        <FooterSubmitButton name={footerName} telephone={footerPhone} />
      </form>
      {footerError && (
        <ErrorFormContainer toggle={() => setFooterError(false)} />
      )}
      {footerSuccess && (
        <SuccessFormContainer toggle={() => setFooterSuccess(false)} />
      )}
    </div>
  );
}

export default React.memo(FooterRegister);
