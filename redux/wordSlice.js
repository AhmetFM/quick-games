import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "word",
  initialState: {
    value: [],
  },
  reducers: {
    addWord: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
