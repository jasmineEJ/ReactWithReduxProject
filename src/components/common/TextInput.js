import React from "react";
import PropTypes from "prop-types";

import "./common.css";
const TextInput = ({
  id,
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  readOnlyVal
}) => {
  let wrapperClass = "form-group textbox-width";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          id={id}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnlyVal ? readOnlyVal : false}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};
TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
