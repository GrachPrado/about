// checked
import React from "react";

const validateFooterNameInput = (input) => /^[A-Za-zА-Яа-яЁё\s]{0,20}$/.test(input);

function FooterRegisterName({
setFooterName,
  name,
  type = "text",
  placeholder,
  value,
}) {
  const FooterhandleNameChange = (event) => {
    const { value: newFooterName } = event.target;
    if (validateFooterNameInput(newFooterName) || newFooterName === "") {
        setFooterName(newFooterName);
    }
  };

  return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={FooterhandleNameChange}
        required
      />
  );
}

export default React.memo(FooterRegisterName);
