import TodoList from "./components/ToDoList";
import "./App.css";
import TodoInput from "./components/TodoInput";
import React from "react";
import TodoCompleted from "./components/TodoCompleted";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoInCompleted from "./components/TodoIncompleted";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">home</Link>
        <Link to="/completed">completed items</Link>
        <Link to="/incompleted">incompleted items</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/completed" element={<TodoCompleted />} />
        <Route path="/incompleted" element={<TodoInCompleted />} />
      </Routes>
    </Router>
  );
}

export default App;
