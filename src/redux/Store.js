import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSLice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
