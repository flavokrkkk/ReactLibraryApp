import React from "react";
import "./Input.scss";
import PropTypes, { string } from "prop-types";

const Input = ({
  onChange,
  value,
  placeholder,
  width,
  height,
  border,
  outline,
  borderRadius,
}) => {
  const classes = [width, height, border, outline, borderRadius];

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
  borderRadius: PropTypes.oneOf(["r-1", "r-2", "r-3", "r-4", "r-5"]),
  width: PropTypes.oneOf(["w-100", "w-200", "w-300", "w-400", "w-500"]),
  height: PropTypes.oneOf(["h-10", "h-20", "h-30", "h-40", "h-50"]),
  outline: PropTypes.oneOf(["none", "invert"]),
  border: PropTypes.oneOf(["b-purple-1", "b-red-1", "b-purple-2", "b-red-2"]),
};

Input.defaultProps = {
  placeholder: "",
};
