import React, { useState } from "react";
import SearchInput from "./main-section-components/searchInput";
import DashboardWithGroupControl from "./main-section-components/dashboardWithGroupControl";
import Folders from "./main-section-components/folders";
import RecentFiles from "./main-section-components/recentFiles";

function MainSection() {
  const [toggle, setToggleClasses] = useState(true);

  return (
    <section className="main-section">
      <SearchInput />
      <DashboardWithGroupControl
        toggle={toggle}
        setToggleClasses={setToggleClasses}
      />
      <Folders toggle={toggle} />
      <RecentFiles />
    </section>
  );
}

export default MainSection;
