import "./MyTable.scss";
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
              <td key={id}>
                {info} - {body}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
