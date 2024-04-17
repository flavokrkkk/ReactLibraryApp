import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  disabled,
  variant,
  borderRadius,
  isWidth,
  height,
  fontSize,
}) => {
  const classes = [
    variant,
    borderRadius,
    isWidth && "isWidth",
    height,
    fontSize,
  ];

  return (
    <div className="Button-Wrapper">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`Button ${classes.join(" ").replace(/,/gim, "").trim()}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "purple",
    "light-purple",
    "middle-purple",
    "dark-purple",
  ]),
  borderRadius: PropTypes.oneOf(["r-20"]),
  isWidth: PropTypes.bool,
  height: PropTypes.oneOf(["h-1", "h-2"]),
  fontSize: PropTypes.oneOf(["fs-1"]),
};

Button.defaultProps = {
  disabled: false,
  variant: "default",
  isWidth: false,
};
