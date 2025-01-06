const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
