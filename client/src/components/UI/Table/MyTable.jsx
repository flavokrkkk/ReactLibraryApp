import "./styles.js";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const MyTable = ({ rows, columns, isBorder }) => {
  return (
    <S.TableContainer>
      <S.TableStyles isBorder={isBorder}>
        <thead>
          <tr>
            {columns.map(({ title, id }) => (
              <th key={id}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map(({ info, body, id }) => (
              <td key={id}>{` ${info} - ${body} `}</td>
            ))}
          </tr>
        </tbody>
      </S.TableStyles>
    </S.TableContainer>
  );
};

export default MyTable;

MyTable.propTypes = {
  rows: PropTypes.array.isRequired,
  isBorder: PropTypes.bool,
  columns: PropTypes.array.isRequired,
};

MyTable.defaultProps = {
  isBorder: false,
};
