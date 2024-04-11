import React from "react";
import { Button, Input, Space } from "antd";
import "./InputSearched.scss";

const InputSearched = ({ value, onChange }) => {
  return (
    <div className="Library__Catalog-Input">
      <Space.Compact className="Library__Catalog-Searched">
        <Input
          value={value}
          onChange={onChange}
          className="Library__Input__Searched"
          placeholder="Поиск книг..."
        />
        <Button type="default" className="Library__Catalog-Button">
          Submit
        </Button>
      </Space.Compact>
    </div>
  );
};

export default InputSearched;
