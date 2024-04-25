import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const InputComponent = styled.input`
  height: 40px;
  border-radius: 10px;
  padding: 10px;
`;

export const InputComponentStyles = styled(InputComponent)`
  ${({ border }) => {
    switch (border !== "") {
      case border === "b-purple-2":
        return css`
          border: 2px solid #babad3;
        `;
      case border === "b-red-2":
        return css`
          border: 2px solid #d196a1;
        `;
      default:
        return css`
          border: 2px solid #babad3;
        `;
    }
  }}

  //Outline

  ${({ outline }) =>
    outline &&
    css`
      outline: none;
    `}

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      min-width: 100%;
    `}
`;
