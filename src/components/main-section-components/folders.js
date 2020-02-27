import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionPushNotificationToList } from "../../store/actions";
import SettingsWhiteIcon from "../icons/settingsWhiteIcon";

function Folder() {
  const [active, setActive] = useState(false);
  const folders = useSelector(state => state.storage.folders);
  const dispatch = useDispatch();
  return (
    <div className="folders clearfix">
      <button className="view-all">View All</button>
      <h2>Folders</h2>
      <ul className="folders-list">
        {folders.map(folder => (
          <li key={folder.id} className={folder.folderStyle}>
            <button
              className="btn-settings"
              onClick={() => dispatch(actionPushNotificationToList("clicked"))}
            >
              <SettingsWhiteIcon />
            </button>
            <img src={folder.folderIcon} className="folder-icon" alt="" />
            <h3>{folder.folderName}</h3>
            <ul className="clients">
              {folder.folderUsers.map((user, id) => (
                <li key={id}>
                  <img src={user.imgLink} alt={user.name} />
                </li>
              ))}
            </ul>
            <span className="files">
              <img src="/images/icons/folder-with-files.svg" alt="" />{" "}
              {folder.folderFiles} files
            </span>
            <span className="date">
              <img src="/images/icons/time.svg" alt="" />
              created{" "}
              {`${folder.folderDate.month} ${folder.folderDate.day}, ${folder.folderDate.year}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Folder;
