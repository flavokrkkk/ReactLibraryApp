import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <div className="List__Button-Wrapper">
      <button {...props} className="List__Button">
        {children}
      </button>
    </div>
  );
};

export default Button;
