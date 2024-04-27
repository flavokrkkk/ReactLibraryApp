import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  border-radius: 20px;
  padding: 50px;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 12px;
`;

export const FormStyleContainer = styled(FormContainer)`
  ${({ marginTop }) => {
    switch (marginTop !== "") {
      case marginTop === "m-100":
        return css`
          margin-top: 100px;
        `;
      case marginTop === "m-200":
        return css`
          margin-top: 200px;
        `;
      default:
        return css`
          margin-top: 200px;
        `;
    }
  }}

  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 2px solid #c5c5e4;
    `}
`;
