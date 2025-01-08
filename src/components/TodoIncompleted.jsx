import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

const TodoIncompleted = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos
          .filter((todo) => todo.completed === false)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoIncompleted;
