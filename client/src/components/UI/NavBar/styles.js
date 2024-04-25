import styled, { css } from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
  margin: 0 auto 50px;
`;

export const NavBarLink = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
`;

export const NavBarStyles = styled(NavBarContainer)`
  ${({ bg }) => {
    switch (bg !== "") {
      case bg === "purple":
        return css`
          background-color: #babad3;
        `;
      case bg === "light-purple":
        return css`
          background-color: #d0d0e5;
        `;
      default:
        return css`
          background-color: "light-purple";
        `;
    }
  }}
`;
