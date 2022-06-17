import styles from "./styles";
import React from "react";
//import './style.js';
const Button = (props) => {
  return (
    <button onClick={props.onClickFun} className={styles.btnstyle}>
      {props.value}
    </button>
  );
};

export default Button;
