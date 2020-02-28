import React, { useState } from "react";

import TaskList from "./tasks/taskList";

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
      <TaskList />
    </div>
  );
}

export default ClientTasks;
