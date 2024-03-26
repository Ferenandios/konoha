import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
