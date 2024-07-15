// checked 15/07/2024
import React from "react";
import PropTypes from "prop-types";

// Validation function to format phone input
const validatePhoneInput = (input) => {
  const digits = input.replace(/\D/g, "");
  const countryCode = "(+380)";
  const firstBlock = digits.slice(3, 5);
  const secondBlock = digits.slice(5, 8);
  const thirdBlock = digits.slice(8, 10);
  const fourthBlock = digits.slice(10, 12);

  let formattedNumber = "";
  if (countryCode) formattedNumber += `${countryCode}`;
  if (firstBlock) formattedNumber += `-${firstBlock}`;
  if (secondBlock) formattedNumber += `-${secondBlock}`;
  if (thirdBlock) formattedNumber += `-${thirdBlock}`;
  if (fourthBlock) formattedNumber += `-${fourthBlock}`;

  return formattedNumber;
};

function InputFieldPhone({
  setTelephone,
  label,
  name,
  type = "tel", // Default to 'tel' if no type is specified
  placeholder,
  value,
  style,
}) {
  // Handler for input changes
  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const formattedInput = validatePhoneInput(input);
    setTelephone(formattedInput);
  };

  return (
    <fieldset style={style}>
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlePhoneChange}
        required
      />
    </fieldset>
  );
}

// Define PropTypes for type checking
InputFieldPhone.propTypes = {
  setTelephone: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default React.memo(InputFieldPhone);
