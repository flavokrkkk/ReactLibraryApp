import "./MyTable.scss";
import PropTypes from "prop-types";

const MyTable = ({ rows, columns }) => {
  return (
    <div className="table">
      <table className="table_col">
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
              <td key={id}>{`${body} - ${info}`}</td>
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
  columns: PropTypes.array.isRequired,
};
