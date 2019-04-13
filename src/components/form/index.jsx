import React from "react";
const Form = props => (
  <form onSubmit={props.onSubmit} className={props.className}>
    {props.children}
  </form>
);
export default Form;
