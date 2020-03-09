import React from "react";
import PropTypes from "prop-types";

import "./common.css";
const CalendarInput = ({
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
          type="date"
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
CalendarInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnlyVal: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string
};

export default CalendarInput;
