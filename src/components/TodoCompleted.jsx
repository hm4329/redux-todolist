import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

const TodoCompleted = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos
          .filter((todo) => todo.completed === true)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoCompleted;
