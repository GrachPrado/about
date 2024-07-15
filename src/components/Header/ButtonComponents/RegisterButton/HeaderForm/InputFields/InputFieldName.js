// checked 15/07/2024
import React from "react";

// Validation function to check if the name input is valid
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
  // Handler for input changes
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
