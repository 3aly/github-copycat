import { configureStore } from "@reduxjs/toolkit";
// import taskBoardsReducer from "./taskBoardsReducer";
import themeReducer from "./themeReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
