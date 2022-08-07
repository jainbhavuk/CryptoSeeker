
import React from "react";
import './styles.css';
const Button = (props) => {
  return (
    <button onClick={props.onClickFun} className=".btnstyle">
      {props.value}
    </button>
  );
};

export default Button;
