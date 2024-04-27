import Container from "../UI/Container/Container";
import Title from "../UI/Title/Title";

const Error = ({ error }) => {
  return (
    <Container>
      <Title>{error}</Title>
    </Container>
  );
};

export default Error;
