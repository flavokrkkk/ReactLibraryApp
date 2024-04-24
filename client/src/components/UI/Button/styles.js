import styled, { css } from "styled-components";
import Button from "./Button";

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

//Parent
export const ButtonComponent = styled.button`
  height: 40px;
  border: 1px solid white;
  display: inline-block;
  cursor: pointer;
  color: #000000;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.15rem;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  padding: 15px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #d0d0e5;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
`;

export const ButtonComponentStyles = styled(ButtonComponent)`
  //Width
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      min-width: 100%;
    `}

  //Height
  ${({ height }) =>
    height === "h-1" &&
    css`
      height: 40px;
    `}

  ${({ height }) =>
    height === "h-2" &&
    css`
      height: 50px;
    `}

  //Font-Size
  ${({ isSmallFontSize }) =>
    isSmallFontSize &&
    css`
      font-size: 8px;
    `}


  //BorderRadius

  ${({ isBorderRadius }) =>
    isBorderRadius &&
    css`
      border-radius: 20px;
    `} 
    //Variant

  ${({ variant }) =>
    variant === "purple" &&
    css`
      background-color: #babad3;
      &:before {
        background-color: #ababc9;
      }
    `}

  ${({ variant }) =>
    variant === "light-purple" &&
    css`
      background-color: #d0d0e5;
      &:before {
        background-color: #c5c5e6;
      }
    `}

  ${({ variant }) =>
    variant === "middle-purple" &&
    css`
      background-color: #d0d0e5;
      &:before {
        background-color: #c5c5e6;
      }
    `}

  ${({ variant }) =>
    variant === "dark-purple" &&
    css`
      background-color: #8888c9;
      &:before {
        background-color: #9797c4;
      }
    `}
`;
