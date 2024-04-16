import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <div className="Input__Container">
      <div className="Input__Wrapper">
        <input
          className="Input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "",
};
