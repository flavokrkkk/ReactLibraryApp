import "./styles.js";
import PropTypes from "prop-types";
import { TableContainer, TableStyles } from "./styles.js";

const MyTable = ({ rows, columns, isBorder }) => {
  return (
    <TableContainer>
      <TableStyles isBorder={isBorder}>
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
      </TableStyles>
    </TableContainer>
  );
};

export default MyTable;

MyTable.propTypes = {
  isBorder: PropTypes.bool,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

MyTable.defaultProps = {
  isBorder: false,
};
