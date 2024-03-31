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
  showedPage: "blog",
  currentPost: null,
  search: "",
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
      const post = state.posts[payload.postId];
      if (post && post.rates && payload.rateType in post.rates) {
        if (payload.type === "add") {
          post.rates[payload.rateType] += 1;
        } else if (payload.type === "remove") {
          post.rates[payload.rateType] -= 1;
        }
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
    setCurrentPost: (state, action: PayloadAction<number>) => {
      state.currentPost = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
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
  setCurrentPost,
  setSearch,
} = postsSlice.actions;
