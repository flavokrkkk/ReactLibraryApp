import Title from "../Title/Title.jsx";
import { ErrorContainer } from "./Error.js";
const Error = ({ error }) => {
  return (
    <ErrorContainer>
      <Title>{error}</Title>
    </ErrorContainer>
  );
};

export default Error;
