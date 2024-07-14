// checked
import React from "react";

const validateFooterPhoneInput = (input) => {
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

function FooterRegisterPhone({
  setFooterPhone,
  name,
  type = 'tel',
  placeholder,
  value,
}) {
  const handleFooterPhoneChange = (event) => {
    const input = event.target.value;
    const formattedInput = validateFooterPhoneInput(input);
    setFooterPhone(formattedInput);
  };

  return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleFooterPhoneChange}
        required
      />
  );
}
export default React.memo(FooterRegisterPhone);
