import React from "react";
import "./Loader.css";

const Loader = props => (
  <div className={`overlay${props.open ? " open" : ""}`}>
    <div class="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
