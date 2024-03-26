import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type IPost, type IState } from "../types/types";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { dispatch }) => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get<IPost[]>(url);
    dispatch(setPosts(res.data));
  }
);

const initialState: IState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export default postsSlice.reducer;
export const { setPosts } = postsSlice.actions;
