import React from "react";
import RecentFilesList from "./recent-files/recentFilesList"

function RecentFiles() {
  return (
    <div className="recent-files">
      <button className="view-all">View All</button>
      <h2>Recent Files</h2>
      <RecentFilesList />
    </div>
  );
}

export default RecentFiles;
