import PropTypes from "prop-types";
import {
  ButtonComponent,
  ButtonComponentStyles,
  ButtonContainer,
} from "./styles.js";

const Button = ({
  children,
  onClick,
  isDisabled,
  variant,
  isBorderRadius,
  isFullWidth,
  height,
  isSmallFontSize,
}) => {
  return (
    <ButtonContainer>
      <ButtonComponentStyles
        onClick={onClick}
        disabled={isDisabled}
        height={height}
        variant={variant}
        isFullWidth={isFullWidth}
        isBorderRadius={isBorderRadius}
        isSmallFontSize={isSmallFontSize}
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
};
