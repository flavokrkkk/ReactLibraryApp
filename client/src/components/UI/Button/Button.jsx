import PropTypes from "prop-types";
import * as S from "./styles.js";

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
    <S.ButtonContainer>
      <S.ButtonComponentStyles
        onClick={onClick}
        disabled={isDisabled}
        height={height}
        variant={variant}
        isFullWidth={isFullWidth}
        isBorderRadius={isBorderRadius}
        isSmallFontSize={isSmallFontSize}
      >
        {children}
      </S.ButtonComponentStyles>
    </S.ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "purple",
    "light-purple",
    "middle-purple",
    "dark-purple",
  ]),
  isBorderRadius: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  height: PropTypes.oneOf(["h-1", "h-2"]),
  isSmallFontSize: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
  variant: "purple",
  isFullWidth: false,
  isBorderRadius: false,
  isSmallFontSize: false,
};
