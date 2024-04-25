import React from "react";
import PropTypes, { string } from "prop-types";
import { InputContainer, InputComponentStyles } from "./styles.js";

const Input = ({
  onChange,
  value,
  placeholder,
  border,
  isFullWidth,
  isOutline,
}) => {
  return (
    <InputContainer>
      <InputComponentStyles
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        border={border}
        isOutline={isOutline}
        isFullWidth={isFullWidth}
      />
    </InputContainer>
  );
};

export default Input;

Input.propTypes = {
  isOutline: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  border: PropTypes.oneOf(["b-purple-2", "b-red-2"]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  isFullWidth: false,
  placeholder: "",
  border: "b-purple-2",
};
