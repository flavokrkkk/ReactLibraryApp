import styled, { css } from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TableStyles = styled.table`
  font-size: 14px;
  min-width: 1000px;
  background: white;
  text-align: left;
  border-collapse: collapse;
  color: #ab96e6;
  th:first-child,
  td:first-child {
    color: #ab96e6;
  }
  th {
    font-weight: normal;
    width: 200px;
    border-right: 20px solid white;
    border-left: 20px solid white;
    padding: 8px 10px;
  }
  td {
    border-right: 20px solid white;
    border-left: 20px solid white;
    padding: 12px 10px;
    color: #ab96e6;
  }

  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 2px solid #ab96e6;
    `}
`;
