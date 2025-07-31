import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, done: false };

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => navigate("/tasks"));
  }

  return (
    <div className="form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add a New Task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
