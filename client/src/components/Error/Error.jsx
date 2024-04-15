import "./Error.scss";

const Error = ({ error }) => {
  return (
    <div>
      <h1 className="Library__Catalog-Container-Error Library__Catalog-Error">
        {error}
      </h1>
    </div>
  );
};

export default Error;
