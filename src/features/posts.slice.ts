import { createSlice } from "@reduxjs/toolkit";
import { type IState } from "../types/types";

const initialState: IState = {
  posts: [],
};

const postsSlice = createSlice({ name: "posts", initialState, reducers: {} });

export default postsSlice.reducer;
