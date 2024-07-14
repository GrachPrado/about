// checked
import React from "react";

const validateNameInput = (input) => /^[A-Za-zА-Яа-яЁё\s]{0,20}$/.test(input);

function InputFieldName({
  setName,
  label,
  name,
  type = "text", // Default to 'text' if no type is specified
  placeholder,
  value,
  style,
}) {
  const handleNameChange = (event) => {
    const { value: newName } = event.target;
    if (validateNameInput(newName) || newName === "") {
      setName(newName);
    }
  };

  return (
    <fieldset style={style}>
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleNameChange}
        required
      />
    </fieldset>
  );
}

export default React.memo(InputFieldName);
