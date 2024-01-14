import React from "react";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="DashboardContainer">
      <div className="Title">{props.title}</div>
      <div className="Content">Content of Dashboard</div>
    </div>
  );
};

export default Dashboard;
