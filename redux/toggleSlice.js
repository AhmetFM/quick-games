import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    value: false,
  },
  reducers: {
    openToggle: (state) => {
      state.value = true;
    },
    closeToggle: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openToggle, closeToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
