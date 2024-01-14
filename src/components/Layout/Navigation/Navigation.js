import React from "react";
import "./Navigation.css";
import Dashboard from "../../../views/Dashboard/Dashboard";
import DataManagement from "../../../views/DataManagement/DataManagement";
import ModelManagement from "../../../views/ModelManagement/ModelManagement";

const Navigation = () => {
  const [navigationContent, setNavigationContent] = React.useState(null);

  const renderNavigationContent = () => {
    if (navigationContent === "dashboard") {
      return <Dashboard title="Dashboard" />;
    } else if (navigationContent === "data-management") {
      return <DataManagement title="Data Management" />;
    } else if (navigationContent === "model-management") {
      return <ModelManagement title="Model Management" />;
    }
  };

  return (
    <div className="NavigationContainer">
      <div className="NavigationMenu">
        <ul>
          <li onClick={() => setNavigationContent("dashboard")}>
            <small>Dashboard</small>
          </li>
          <li onClick={() => setNavigationContent("data-management")}>
            <small>Data Managemnet</small>
          </li>
          <li onClick={() => setNavigationContent("model-management")}>
            <small>Model Managemnet</small>
          </li>
        </ul>
      </div>
      <div className="NavigationContent">{renderNavigationContent()}</div>
    </div>
  );
};

export default Navigation;
