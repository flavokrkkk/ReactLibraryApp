import Container from "../Container/Container";
import Title from "../Title/Title";

const Error = ({ error }) => {
  return (
    <Container>
      <Title>{error}</Title>
    </Container>
  );
};

export default Error;
