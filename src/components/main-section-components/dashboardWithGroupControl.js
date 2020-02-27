import React from "react";

import WelcomePanel from "./dashboard-with-group-control/welcomePanel";
import ControlPanel from "./dashboard-with-group-control/controlPanel";

function DashboardWithGroupControl() {
  return (
    <div className="dashboard-and-control clearfix">
      <ControlPanel />
      <h2>Dashboard</h2>
      <WelcomePanel />
    </div>
  );
}

export default DashboardWithGroupControl;
