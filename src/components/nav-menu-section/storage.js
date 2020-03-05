import React from "react";
import { useSelector } from "react-redux";

const percent = 100;

function Storage() {
  const storageUsed = useSelector(state => state.storage.storageUsed);
  const storageField = useSelector(state => state.storage.storageField);

  return (
    <div className="storage">
      <div className="info">
        <h4>
          <img src="/images/icons/storage-cloud.svg" alt="cloud" />
          Storage
        </h4>
        <h4>{(percent * storageUsed) / storageField}%</h4>
      </div>
      <div className="progress-bar">
        <div
          className="memo-used"
          style={{
            width: `${(percent * storageUsed) / storageField}%`
          }}
        ></div>
      </div>

      <h5>
        {storageField - (storageField - storageUsed)}/{storageField} GB Used
      </h5>
    </div>
  );
}
export default Storage;
