import React from "react";

function TaskItem({ task, onDelete }) {
  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
