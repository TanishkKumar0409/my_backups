import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices";

export const store = configureStore({
  reducer: todoReducer,
});
