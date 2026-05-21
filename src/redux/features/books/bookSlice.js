import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, actions) => {
      state.books.push({
        id: Date.now(),
        text: actions.payload,
      });
    },

    deleteBook: (state, actions) => {
      state.books = state.books.filter((book) => book.id !== actions.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
