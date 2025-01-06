import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: id,
  });
  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    if (isEditing && newText) {
      todo.text = newText;
    }
    setIsEditing(!isEditing);
  };
  const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id,
  });
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const editTodo = (id) => {
    const newTodo = {
      id: id,
      text: newText,
    };
    return {
      type: "EDIT_TODO",
      payload: newTodo,
    };
  };
  const handleComplete = () => {
    dispatch(editTodo(todo.id));
    setIsEditing(!isEditing);
  };
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <label>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleComplete}>complete</button>
          <button onClick={handleDelete}>delete</button>
        </label>
      ) : (
        <label>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </label>
      )}
    </li>
  );
};

export default Todo;
