import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/Auth/authSlice';
import { loadingSlice } from "./Slices/loadingSlice";

export const store = configureStore({
	reducer: {
    user: authSlice.reducer,
	loading: loadingSlice.reducer
	},
});
