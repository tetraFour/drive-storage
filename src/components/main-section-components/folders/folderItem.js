import React, { useState } from "react";

import SettingsWhiteIcon from "../../icons/settingsWhiteIcon";
function FolderItem({
  id,
  folderStyle,
  icon,
  name,
  folderUsers,
  folderFiles,
  folderDate
}) {
  const [toggleSettingsMenuClass, setToggleSettingsMenuClass] = useState(false);
  return (
    <li className={folderStyle}>
      <button
        className="btn-settings"
        onClick={() => setToggleSettingsMenuClass(!toggleSettingsMenuClass)}
      >
        <SettingsWhiteIcon />
      </button>
      <img src={icon} className="folder-icon" alt="" />
      <h3>{name}</h3>
      <ul className="clients">
        {folderUsers.map((user, id) => (
          <li key={id}>
            <img src={user.imgLink} alt={user.name} />
          </li>
        ))}
      </ul>
      <span className="files">
        <img src="/images/icons/folder-with-files.svg" alt="" /> {folderFiles}{" "}
        files
      </span>
      <span className="date">
        <img src="/images/icons/time.svg" alt="" />
        created {`${folderDate.month} ${folderDate.day}, ${folderDate.year}`}
      </span>
      <div
        className={
          toggleSettingsMenuClass ? "settings-menu active" : "settings-menu"
        }
      >
        <ul>
          <li>
            <button>remove</button>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default FolderItem;
