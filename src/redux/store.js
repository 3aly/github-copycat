import { configureStore } from "@reduxjs/toolkit";
// import taskBoardsReducer from "./taskBoardsReducer";
import themeReducer from "./themeReducer";
import LoaderReducer from "./LoaderReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loader: LoaderReducer,
  },
});
