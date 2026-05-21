import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todosSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo: (state, actions)=>{
            state.todos.push({
                id: Date.now(),
                text: actions.payload
            })
        },

        deleteTodo: ((state, actions)=>{
          state.todos =  state.todos.filter((todo)=> todo.id !== actions.payload)
        })
    }
})


export const {addTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;