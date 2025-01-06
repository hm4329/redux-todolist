import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (text) => ({
    type: "ADD_TODO",
    payload: text,
  });
  const genId = () => {
    let id = 3;
    return () => id++;
  };
  const handleAddTodo = () => {
    const newTodo = { id: genId(), text: input, completed: false };
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>+</button>
    </div>
  );
};

export default TodoInput;
