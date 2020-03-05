import React from "react";
import { useSelector } from "react-redux";

import FolderItem from "./folderItem";

const FolderList = ({ toggle }) => {
  const folders = useSelector(state => state.storage.folders);

  return (
    <div>
      <ul className={toggle ? "folders-list row" : "folders-list col"}>
        {folders.map(folder => (
          <FolderItem
            key={folder.id}
            folderStyle={folder.folderStyle}
            icon={folder.folderIcon}
            name={folder.folderName}
            folderUsers={folder.folderUsers}
            folderFiles={folder.folderFiles}
            folderDate={folder.folderDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
