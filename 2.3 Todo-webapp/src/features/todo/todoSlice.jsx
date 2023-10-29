import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift({
        ...action.payload,
        status: "pending",
        id: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
      });
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToEdit) todoToEdit.task = action.payload.task;
    },
    completeTodo: (state, action) => {
      state.todoList.find((todo) => todo.id === action.payload).status =
        "completed";
    },
  },
});

export const { addTodo, editTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
