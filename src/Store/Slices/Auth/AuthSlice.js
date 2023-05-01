import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    }
  },
})

export const { login, logout } = authSlice.actions