import React from "react";
import "./input.css";

const Input = props => (
  <input
    disabled={props.disabled}
    type={props.type || "text"}
    className={props.className}
    value={props.value}
    id={props.id}
    placeholder={props.placeholder}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
);
export default Input;
