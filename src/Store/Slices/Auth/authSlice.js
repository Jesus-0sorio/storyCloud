import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || JSON.parse(window.localStorage.getItem("user")),
  token: null || window.localStorage.getItem("token"),
  isAuthenticating: !window.localStorage.getItem("token") ? false : true,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticating = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailed: (state, action) => {
      state.isAuthenticating = false;
      state.user = null;
      state.token = null;
      state.error = action.payload.error;
    },
    logoutStore: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticating = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailed, logoutStore } = authSlice.actions;
