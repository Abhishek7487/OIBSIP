import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    filteredTodoList: [],
    activeList: "pending",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift({
        ...action.payload,
        status: "pending",
        id: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
      });
      state.filteredTodoList = state.todoList.filter(
        (todo) => todo.status === "pending"
      );
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
      state.filteredTodoList = state.todoList.filter(
        (todo) => todo.status === "pending"
      );
    },
    filterTodoList: (state, action) => {
      if (action.payload === "pending") {
        state.filteredTodoList = state.todoList.filter(
          (todo) => todo.status === "pending"
        );
        state.activeList = "pending";
      } else if (action.payload === "completed") {
        state.filteredTodoList = state.todoList.filter(
          (todo) => todo.status === "completed"
        );
        state.activeList = "completed";
      } else if (action.payload === "high") {
        state.filteredTodoList = state.todoList.filter(
          (todo) => todo.priority === "high" && todo.status === "pending"
        );
        state.activeList = "pending";
      } else if (action.payload === "medium") {
        state.filteredTodoList = state.todoList.filter(
          (todo) => todo.priority === "medium" && todo.status === "pending"
        );
        state.activeList = "pending";
      } else if (action.payload === "low") {
        state.filteredTodoList = state.todoList.filter(
          (todo) => todo.priority === "low" && todo.status === "pending"
        );
        state.activeList = "pending";
      }
    },
  },
});

export const { addTodo, editTodo, completeTodo, filterTodoList } =
  todoSlice.actions;

export default todoSlice.reducer;
