import React, { useState } from "react";
import axios from "axios";
import HeaderForm from "./HeaderForm/HeaderForm";
import SuccessFormContainer from "./HeaderForm/SuccessFormContainer/SuccessFormContainer";
import ErrorFormContainer from "./HeaderForm/ErrorFormContainer/ErrorFormContainer";
import "./RegisterButtonStyles/RegisterButtonStyles.scss";
import "./HeaderForm/HeaderForm.scss";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;
const TOKEN = process.env.REACT_APP_TOKEN;

export default function RegisterButton({className, description, children}) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setIsSubmittedSuccessfully(false);
      setErrorRegister(false);
    }
  };

  const toggleSuccessForm = () => {
    setIsSubmittedSuccessfully(false);
  };

  const handleSubmit = async (formData) => {
    if (formData.telephone.length < 19) {
      setErrorRegister(true);
      setShowPopup(false);
    } else {
      try {
        await axios.post(`${API_ENDPOINT}/bot${TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: `${formData.name} ${formData.telephone}`,
        });
        setIsSubmittedSuccessfully(true);
        setShowPopup(false);
      } catch (error) {
        console.error("Failed to send message:", error);
        setIsSubmittedSuccessfully(false);
      }
    }
  };

  const getOpacity = (value) => {
    return { opacity: value ? 1 : 0.2 };
  };

  return (
    <>
      <div className={className} onClick={togglePopup}>
        <button className="register-button__open">
          {children}
          <p>{description}</p>
        </button>
      </div>
      {showPopup && (
        <HeaderForm
          getOpacity={getOpacity}
          toggle={togglePopup}
          submit={handleSubmit}
        />
      )}
      {!showPopup && isSubmittedSuccessfully && (
        <SuccessFormContainer toggle={toggleSuccessForm} />
      )}
      {!showPopup && errorRegister && (
        <ErrorFormContainer
          toggle={() => {
            setErrorRegister(false);
            setShowPopup(true);
          }}
        />
      )}
    </>
  );
}
