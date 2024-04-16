import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick, disabled }) => {
  return (
    <div className="Button-Wrapper">
      <button onClick={onClick} disabled={disabled} className="Button">
        {children}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
};
