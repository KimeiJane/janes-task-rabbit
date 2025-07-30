import React from "react";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/add" element={<AddTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
