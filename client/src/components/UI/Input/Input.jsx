import React from "react";
import "./Input.scss";
import PropTypes, { string } from "prop-types";
import classNames from "classnames";

const Input = ({
  onChange,
  value,
  placeholder,
  border,
  isFullWidth,
  outline,
}) => {
  const inputClass = classNames(
    "input",
    border,
    { isFullWidth },
    { none: outline },
  );

  return (
    <div className="input__container">
      <div>
        <input
          className={inputClass}
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  outline: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  border: PropTypes.oneOf(["b-purple-2", "b-red-2"]),
};

Input.defaultProps = {
  placeholder: "",
  isFullWidth: false,
};
