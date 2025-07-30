import React from "react";


function TaskItem({ task, onDelete }) {
  return (
    <div className={`task-item ${task.done ? "done" : ""}`}>
      <span className="task-title">{task.title}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
