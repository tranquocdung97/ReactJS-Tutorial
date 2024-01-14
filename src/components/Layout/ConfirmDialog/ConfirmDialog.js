import React from "react";

const ConfirmDialog = (props) => {
  return (
    <div
      style={{ position: "absolute", backgroundColor: "white", margin: "auto" }}
    >
      <h3>{props.title}</h3>
      <h5>{props.subTitle}</h5>
      <button>{props.okButton}</button>
      <button>{props.cancelButton}</button>
    </div>
  );
};

export default ConfirmDialog;
