import React from "react";
import { useSelector } from "react-redux";

import SettingsIcon from "../../icons/settingsIcon";
import AddIcon from "../../icons/addIcon";
import ShareIcon from "../../icons/shareIcon";

const RecentFilesList = () => {
  const files = useSelector(state => state.storage.files);

  return (
    <ul className="res-file-list">
      {files.map(file => (
        <li key={file.id} className={`file ${file.fileType}`}>
          <span className="file-ext">{file.fileType}</span>
          <h3>{file.fileName}</h3>
          <h4>{file.fileMembers}</h4>
          <span className="date">{`${file.fileDate.month} ${file.fileDate.day} ${file.fileDate.year}`}</span>
          <span className="file-size">{file.fileSize} mb</span>
          <div className="button-wrapper">
            <button className="add">
              <AddIcon />
            </button>
            <button className="share">
              <ShareIcon />
            </button>
            <button className="settings">
              <SettingsIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecentFilesList;
