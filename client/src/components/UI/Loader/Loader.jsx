import React from "react";
import "./styles.js";
import * as S from "./styles.js";

const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.LoaderTitle className="loader__wrapper loader">
        Loading...
      </S.LoaderTitle>
    </S.LoaderContainer>
  );
};

export default Loader;
