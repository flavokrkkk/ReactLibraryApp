import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick, disabled, variant }) => {
  return (
    <div className="Button-Wrapper">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`Button ${variant}`}
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
  variant: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  variant: "default",
};
