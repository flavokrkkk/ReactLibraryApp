import React from "react";

const TableList = ({ data, title }) => {
  return (
    <>
      <tr>
        {title.map((tit) => (
          <th key={tit.id}>{tit.title}</th>
        ))}
      </tr>
      <tr>
        {data.map((dat) => (
          <td key={dat.id}>
            {dat.data} - {dat.title}
          </td>
        ))}
      </tr>
    </>
  );
};

export default TableList;
