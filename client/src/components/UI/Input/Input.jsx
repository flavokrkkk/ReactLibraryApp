import React from "react";
import "./Input.scss";
import PropTypes, { string } from "prop-types";

const Input = ({
  onChange,
  value,
  placeholder,
  border,
  isWidth,
  outline,
  borderRadius,
}) => {
  const classes = [isWidth && "isWidth", border, outline, borderRadius];

  return (
    <div className="Input__Container">
      <div className="Input__Wrapper">
        <input
          className={`Input ${classes.join(" ").replace(/,/gim, "").trim()}`}
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
  borderRadius: PropTypes.oneOf(["r-1", "r-2"]),
  outline: PropTypes.oneOf(["none", "invert"]),
  isWidth: PropTypes.bool,
  border: PropTypes.oneOf(["b-purple-1", "b-red-1", "b-purple-2", "b-red-2"]),
};

Input.defaultProps = {
  placeholder: "",
};
