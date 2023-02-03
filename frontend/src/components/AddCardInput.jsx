import PropTypes from "prop-types";
import React from "react";

function AddCardInput({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  className,
  addNewProperty,
  setAddNewProperty,
}) {
  const handleChange = (e) => {
    setAddNewProperty({
      ...addNewProperty,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div key={id}>
      <label htmlFor={name}> {label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
}

AddCardInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  addNewProperty: PropTypes.func.isRequired,
  setAddNewProperty: PropTypes.func.isRequired,
};

export default AddCardInput;
