import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "active",
  initialState: {
    value: false,
  },
  reducers: {
    openActive: (state) => {
      state.value = true;
    },
    closeActive: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openActive, closeActive } = activeSlice.actions;

export default activeSlice.reducer;
