import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  actionUpgradeStore,
  actionOpenNotification,
  actionCloseNotification,
  actionPushNotificationToList
} from "../../store/actions/";

function DashboardWithGroupControl() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actionUpgradeStore());
    dispatch(actionPushNotificationToList("store has been upgraded"));
    dispatch(actionOpenNotification());
    setTimeout(() => {
      dispatch(actionCloseNotification());
    }, 2000);
  };

  const isStorageFilledUpgraded = useSelector(
    state => state.storage.isStorageFilledUpgraded
  );
  return (
    <div className="dashboard-and-control clearfix">
      <div className="control-panel">
        <button className="group-as-blocks"></button>
        <button className="group-as-list"></button>
        <label htmlFor="files" className="upload-file">
          Upload File <img src="/images/icons/upload-file.svg" alt="upload" />
        </label>
        <input type="file" id="files" />
      </div>
      <h2>Dashboard</h2>
      <div className="welcome-panel">
        <h1>Welcome Back Jannie</h1>
        <p>
          Get additional 500 GB space for your documents and files. Unlock now
          for more space.
        </p>
        <button
          onClick={e => {
            if (isStorageFilledUpgraded) {
              e.preventDefault();
            } else {
              clickHandler();
            }
          }}
          className={
            isStorageFilledUpgraded ? "upload-file upgraded" : "upload-file"
          }
        >
          {isStorageFilledUpgraded ? "Upgraded" : "Upgrade"}
        </button>
        <img className="man" src="/images/illustrations/man.svg" alt="" />
        <img src="/images/illustrations/plain.svg" alt="" className="plain" />
      </div>
    </div>
  );
}

export default DashboardWithGroupControl;
