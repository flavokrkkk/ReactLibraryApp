import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <div className="Button-Wrapper">
      <button {...props} className="Button">
        {children}
      </button>
    </div>
  );
};

export default Button;
