import React from "react";
import PropTypes from "prop-types";

import "./common.css";
const RadioButton = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  defaultChecked
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }
  return (
    <div className={wrapperClass}>
      <input
        type="radio"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        checked={defaultChecked}
        label={label}
      />
      <label htmlFor={name} style={{ marginLeft: "2%" }}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default RadioButton;
