import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    quote: "",
    taskList: [],
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
});

export const { setQuote } = todoSlice.actions;

export default todoSlice.reducer;
