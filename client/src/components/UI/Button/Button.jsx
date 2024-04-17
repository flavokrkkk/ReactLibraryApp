import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  disabled,
  variant,
  borderRadius,
  width,
  height,
  fontSize,
}) => {
  const classes = [variant, borderRadius, width, height, fontSize];

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
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "purple",
    "light-purple",
    "middle-purple",
    "dark-purple",
  ]),
  borderRadius: PropTypes.oneOf(["r-1", "r-2", "r-3", "r-4", "r-5"]),
  width: PropTypes.oneOf(["w-100", "w-200", "w-300", "w-400", "w-500"]),
  height: PropTypes.oneOf(["h-10", "h-20", "h-30", "h-40", "h-50"]),
  fontSize: PropTypes.oneOf(["fs-10", "fs-20", "fs-30", "fs-40", "fs-50"]),
};

Button.defaultProps = {
  disabled: false,
  variant: "default",
};
