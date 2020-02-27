import React from "react";

import FolderList from "./folders/folderList";

function Folder() {
  return (
    <div className="folders clearfix">
      <button className="view-all">View All</button>
      <h2>Folders</h2>
      <FolderList />
    </div>
  );
}

export default Folder;
