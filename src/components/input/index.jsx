import React from "react";
import "./input.css";

const Input = (props) => (
  <div className="ip">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    <input
      checked={props.checked}
      disabled={props.disabled}
      type={props.type || "text"}
      className={props.className}
      value={props.value}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      name={props.name}
      {...props}
    />
  </div>
);
export default Input;
