import TodoList from "./components/ToDoList";
import "./App.css";
import TodoInput from "./components/TodoInput";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>TodoList</h1>
        <TodoInput />
        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
