import React from "react";
import PropTypes, { string } from "prop-types";
import * as S from "./styles.js";

const Input = ({
  onChange,
  value,
  placeholder,
  border,
  isFullWidth,
  isOutline,
}) => {
  return (
    <S.InputContainer>
      <S.InputComponentStyles
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        border={border}
        isOutline={isOutline}
        isFullWidth={isFullWidth}
      />
    </S.InputContainer>
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isOutline: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  border: PropTypes.oneOf(["b-purple-2", "b-red-2"]),
};

Input.defaultProps = {
  placeholder: "",
  isFullWidth: false,
};
