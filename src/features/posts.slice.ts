import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  type userRateType,
  type IPost,
  type IState,
  type showedPageType,
} from "../types/types";

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
  showedPage: "post",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setPostUserRate: (
      state,
      { payload }: PayloadAction<{ type: userRateType; postId: number }>
    ) => {
      state.posts[payload.postId].userRate = payload.type;
    },
    setPostRates: (
      state,
      {
        payload,
      }: PayloadAction<{
        type: "add" | "remove";
        rateType: "disliked" | "liked";
        postId: number;
      }>
    ) => {
      if (!("rates" in state.posts[payload.postId])) return;
      if (!(payload.rateType in state.posts[payload.postId].rates)) return;
      if (payload.type === "add") {
        state.posts[payload.postId].rates[payload.rateType] += 1;
      } else if (payload.type === "remove") {
        state.posts[payload.postId].rates[payload.rateType] -= 1;
      }
    },
    createPostRates: (state, action: PayloadAction<number>) => {
      const getRandomNumber = () => Math.floor(Math.random() * 51);
      state.posts[action.payload].rates = {
        disliked: getRandomNumber(),
        liked: getRandomNumber(),
      };
    },
    setShowedPage: (state, action: PayloadAction<showedPageType>) => {
      state.showedPage = action.payload;
    },
  },
});

export default postsSlice.reducer;
export const {
  setPosts,
  setPostUserRate,
  createPostRates,
  setPostRates,
  setShowedPage,
} = postsSlice.actions;
