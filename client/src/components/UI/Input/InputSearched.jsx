import React from "react";
import "./InputSearched.scss";

const InputSearched = ({ ...props }) => {
  return (
    <div className="Library__Catalog-Input">
      <div className="Library__Catalog-Wrapper">
        <input
          className="Library__Catalog-Searched"
          placeholder="Поиск..."
          {...props}
        />
      </div>
    </div>
  );
};

export default InputSearched;
