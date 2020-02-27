import React from "react";
import SearchInput from "./main-section-components/searchInput";
import DashboardWithGroupControl from "./main-section-components/dashboardWithGroupControl";
import Folders from "./main-section-components/folders";
import RecentFiles from "./main-section-components/recentFiles";

function MainSection() {
  return (
    <section className="main-section">
      <SearchInput />
      <DashboardWithGroupControl />
      <Folders />
      <RecentFiles />
    </section>
  );
}

export default MainSection;
