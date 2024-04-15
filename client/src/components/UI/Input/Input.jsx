import React from "react";
import "./Input.scss";

const Input = ({ ...props }) => {
  return (
    <div className="Input__Container">
      <div className="Input__Wrapper">
        <input className="Input" placeholder="Поиск..." {...props} />
      </div>
    </div>
  );
};

export default Input;
