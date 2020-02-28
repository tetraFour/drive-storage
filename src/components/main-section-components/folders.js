import React from "react";

import FolderList from "./folders/folderList";

function Folder({ toggle }) {
  return (
    <div className="folders clearfix">
      <button className="view-all">View All</button>
      <h2>Folders</h2>
      <FolderList toggle={toggle} />
    </div>
  );
}

export default Folder;
