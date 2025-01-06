import { createStore } from "redux";
import { todoReducer } from "./reducers/todosReducer";

const store = createStore(todoReducer);

export default store;
