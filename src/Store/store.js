import { configureStore
 } from "@reduxjs/toolkit";
 import { PostSlice } from "./Slices/Post/PostSlice";

 export const store = configureStore({
    reducer: {
        posts: PostSlice.reducer,
    },
});