import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://your-firebase-url.com/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  function handleDelete(id) {
    fetch(`https://your-firebase-url.com/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
