import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signUpSuccess: (state, action) => {
      state.users.push(action.payload);
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, signUpSuccess, logoutSuccess } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
