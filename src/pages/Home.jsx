import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Jane's Task Tracker</h1>
        <p>Organize your day, focus on what matters, and get things done!</p>
        <button onClick={() => navigate("/tasks")}>View Tasks</button>
      </div>
    </div>
  );
}

export default Home;
