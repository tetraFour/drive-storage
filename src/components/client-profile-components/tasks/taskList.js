import React from "react";
import { useSelector } from "react-redux";

import SettingsIcon from "../../icons/settingsIcon";

function TaskList() {
  const tasks = useSelector(state => state.storage.tasks);
  return (
    <>
      {tasks.map(task => (
        <div key={task.id} className="task-item clearfix">
          <button className="settings">
            <SettingsIcon />
          </button>
          <h3>{task.taskName}</h3>
          <span className="date">
            {`${task.taskDate.day} ${task.taskDate.month} ${task.taskDate.year} `}
            &nbsp;
          </span>
          <span className="time">&nbsp;{task.taskDate.time}</span>
          <ul className="task-item-clients">
            {task.taskClients.map((client, id) => (
              <li key={id}>
                <img src={client} alt="" />
              </li>
            ))}
            <li className="other">+</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default TaskList;
