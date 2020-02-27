import React from "react";

import WelcomePanel from "./dashboard-with-group-control/welcomePanel";
import ControlPanel from "./dashboard-with-group-control/controlPanel";

function DashboardWithGroupControl({ toggle, setToggleClasses }) {
  return (
    <div className="dashboard-and-control clearfix">
      <ControlPanel toggle={toggle} setToggleClasses={setToggleClasses} />
      <h2>Dashboard</h2>
      <WelcomePanel />
    </div>
  );
}

export default DashboardWithGroupControl;
