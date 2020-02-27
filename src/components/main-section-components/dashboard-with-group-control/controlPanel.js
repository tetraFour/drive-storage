import React from "react";

function ControlPanel() {
  return (
    <div className="control-panel">
      <button className="group-as-blocks"></button>
      <button className="group-as-list"></button>
      <label htmlFor="files" className="upload-file">
        Upload File <img src="/images/icons/upload-file.svg" alt="upload" />
      </label>
      <input type="file" id="files" />
    </div>
  );
}

export default ControlPanel;
