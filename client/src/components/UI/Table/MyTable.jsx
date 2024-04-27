import "./MyTable.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const MyTable = ({ rows, columns, isBorder }) => {
  const table_border = classNames("table_col", { isBorder });

  return (
    <div className="table">
      <table className={table_border}>
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
      </table>
    </div>
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
