import React from "react";

function ControlPanel({ toggle, setToggleClasses }) {
  return (
    <div className="control-panel">
      <button
        className={!toggle ? "group-as-blocks" : "group-as-blocks active"}
        onClick={() => setToggleClasses(true)}
      ></button>
      <button
        className={toggle ? "group-as-list" : "group-as-list active"}
        onClick={() => setToggleClasses(false)}
      ></button>
      <label htmlFor="files" className="upload-file">
        Upload File <img src="/images/icons/upload-file.svg" alt="upload" />
      </label>
      <input type="file" id="files" />
    </div>
  );
}

export default ControlPanel;
