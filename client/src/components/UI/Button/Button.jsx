import PropTypes from "prop-types";
import { ButtonComponentStyles, ButtonContainer } from "./styles.js";

const Button = ({
  isDisabled,
  isSmallFontSize,
  isBorderRadius,
  isFullWidth,
  height,
  variant,
  children,
  onClick,
}) => {
  return (
    <ButtonContainer>
      <ButtonComponentStyles
        disabled={isDisabled}
        isFullWidth={isFullWidth}
        isBorderRadius={isBorderRadius}
        isSmallFontSize={isSmallFontSize}
        height={height}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </ButtonComponentStyles>
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  isSmallFontSize: PropTypes.bool,
  isBorderRadius: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.string,
  variant: PropTypes.oneOf([
    "purple",
    "light-purple",
    "middle-purple",
    "dark-purple",
  ]),
  height: PropTypes.oneOf(["h-1", "h-2"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  isFullWidth: false,
  isBorderRadius: false,
  isSmallFontSize: false,
  variant: "purple",
  height: "h-1",
  onClick: () => console.log("Function onClick not defined "),
};
