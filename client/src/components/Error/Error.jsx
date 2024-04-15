import "./Error.scss";

const Error = ({ error }) => {
  return (
    <div>
      <h1 className="Error__Wrapper Error">{error}</h1>
    </div>
  );
};

export default Error;
