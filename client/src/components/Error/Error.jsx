import "./Error.scss";

const Error = ({ error }) => {
  return (
    <div>
      <h1 className="error__wrapper error">{error}</h1>
    </div>
  );
};

export default Error;
