import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, done: false };

    fetch("https://your-firebase-url.com/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => navigate("/tasks"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
