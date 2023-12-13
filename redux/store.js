import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import activeReducer from "./activeSlice";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
    active: activeReducer,
  },
});
