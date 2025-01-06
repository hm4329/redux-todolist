import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const completedCount = todos.filter((todo) => todo.completed).length;
  const removeCompleted = () => ({
    type: "REMOVE_COMPLETED",
  });
  const handleRemoveChecked = () => {
    dispatch(removeCompleted());
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <p>{`${completedCount} of ${todos.length} tasks done`}</p>
      <button onClick={handleRemoveChecked}>Remove Checked</button>
    </div>
  );
};

export default TodoList;
