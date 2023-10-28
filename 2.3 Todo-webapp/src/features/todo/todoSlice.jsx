import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    taskList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.taskList.unshift({
        ...action.payload,
        status: "pending",
        id: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
      });
    },
    editTodo: (state, action) => {
      const todoToEdit = state.taskList.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToEdit) todoToEdit.task = action.payload.task;
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
