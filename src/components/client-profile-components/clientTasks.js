import React, { useState } from "react";
import SettingsIcon from "../icons/settingsIcon";

function ClientTasks() {
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  return (
    <div className={isTaskListOpen ? "tasks open clearfix" : "tasks clearfix"}>
      <button
        className="view-all"
        onClick={() => setIsTaskListOpen(!isTaskListOpen)}
      >
        View all
      </button>
      <h2>Your Tasks</h2>
      <div className="task-item clearfix">
        <button className="settings">
          <SettingsIcon />
        </button>
        <h3>Review health care app with team</h3>
        <span className="date">7 Dec, 2019 &nbsp;</span>
        <span className="time">&nbsp;10:00 AM</span>
        <ul className="task-item-clients">
          <li>
            <img src="/images/clients/person2.png" alt="" />
          </li>
          <li>
            <img src="/images/clients/person3.png" alt="" />
          </li>
          <li className="other">+</li>
        </ul>
      </div>
      <div className="task-item clearfix">
        <button className="settings">
          <SettingsIcon />
        </button>
        <h3>Review health care app with team</h3>
        <span className="date">7 Dec, 2019 &nbsp;</span>
        <span className="time">&nbsp;10:00 AM</span>
        <ul className="task-item-clients">
          <li>
            <img src="/images/clients/person2.png" alt="" />
          </li>
          <li>
            <img src="/images/clients/person3.png" alt="" />
          </li>
          <li className="other">+</li>
        </ul>
      </div>
      <div className="task-item clearfix">
        <button className="settings">
          <SettingsIcon />
        </button>
        <h3>Review health care app with team</h3>
        <span className="date">7 Dec, 2019 &nbsp;</span>
        <span className="time">&nbsp;10:00 AM</span>
        <ul className="task-item-clients">
          <li>
            <img src="/images/clients/person2.png" alt="" />
          </li>
          <li>
            <img src="/images/clients/person3.png" alt="" />
          </li>
          <li className="other">+</li>
        </ul>
      </div>
    </div>
  );
}

export default ClientTasks;
