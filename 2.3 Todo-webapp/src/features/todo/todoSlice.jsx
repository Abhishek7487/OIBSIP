import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {},
});

// export [] = todoSlice.actions;

export default todoSlice.reducer;
