import "./styles.js";
import { LoaderContainer, LoaderTitle } from "./styles.js";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderTitle className="loader__wrapper loader">Loading...</LoaderTitle>
    </LoaderContainer>
  );
};

export default Loader;
