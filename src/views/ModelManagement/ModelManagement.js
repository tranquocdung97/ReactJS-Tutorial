import React from "react";
import "./ModelManagement.css";

const ModelManagement = (props) => {
  return (
    <div className="ModelMangamentContainer">
      <div className="Title">{props.title}</div>
      <div className="Content">Content of Model Mangament</div>
    </div>
  );
};

export default ModelManagement;
