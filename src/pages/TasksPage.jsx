import React from "react";
import TaskList from "../components/TaskList";

function TasksPage() {
  return (
    <div className="tasks-page">
      <h2 className="tasks-title">Your Tasks</h2>
      <TaskList />
    </div>
  );
}

export default TasksPage;
