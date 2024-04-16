import React from "react";
import "./Input.scss";
import PropTypes, { string } from "prop-types";

const Input = ({ onChange, value, placeholder, outline }) => {
  const classes = [outline === "purple" ? `Inputbox` : `Input`];

  return (
    <div className="Input__Container">
      <div className="Input__Wrapper">
        <input
          className={classes}
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
  width: string,
  height: string,
};

Input.defaultProps = {
  placeholder: "",
};
