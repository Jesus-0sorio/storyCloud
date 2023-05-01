import {
    configureStore
} from "@reduxjs/toolkit";
import { authSlice } from './Slices/Auth/AuthSlice';
import { PostSlice } from "./Slices/Post/PostSlice";

export const store = configureStore({
    reducer: {
        posts: PostSlice.reducer,
        user: authSlice.reducer,
    },
});