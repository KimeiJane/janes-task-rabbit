import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Jane's Task Tracker</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/add">Add Task</Link>
      </div>
    </nav>
  );
}

export default NavBar;
