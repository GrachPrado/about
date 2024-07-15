// checked 15/07/2024
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import HeaderForm from "./HeaderForm/HeaderForm";
import SuccessFormContainer from "./HeaderForm/SuccessFormContainer/SuccessFormContainer";
import ErrorFormContainer from "./HeaderForm/ErrorFormContainer/ErrorFormContainer";
import "./RegisterButtonStyles/RegisterButtonStyles.scss";
import "./HeaderForm/HeaderForm.scss";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;
const TOKEN = process.env.REACT_APP_TOKEN;

export default function RegisterButton({ className, description, children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  // Toggle the visibility of the popup form
  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setIsSubmittedSuccessfully(false);
      setErrorRegister(false);
    }
  };

  // Reset success form state
  const resetSuccessForm = () => {
    setIsSubmittedSuccessfully(false);
  };

  // Handle form submission
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

  // Get opacity style based on a value
  const getOpacityStyle = (value) => {
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
          getOpacity={getOpacityStyle}
          toggle={togglePopup}
          submit={handleSubmit}
        />
      )}
      {!showPopup && isSubmittedSuccessfully && (
        <SuccessFormContainer toggle={resetSuccessForm} />
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

// Define prop types for type checking
RegisterButton.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};
