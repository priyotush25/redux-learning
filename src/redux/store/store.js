import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoApp: todosReducer,
    bookApp: bookReducer
  },
});
