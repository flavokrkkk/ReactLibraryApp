import "./Button.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  //Использование библиотеки classnames
  const btnCLass = classNames("button", variant, height, {
    isFullWidth,
    isBorderRadius,
    isSmallFontSize,
  });

  return (
    <div className="button__wrapper">
      <button onClick={onClick} disabled={isDisabled} className={btnCLass}>
        {children}
      </button>
    </div>
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
  fontSize: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
  variant: "purple",
  isFullWidth: false,
  isBorderRadius: false,
  isSmallFontSize: false,
};
