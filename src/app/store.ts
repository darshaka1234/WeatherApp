import { configureStore } from "@reduxjs/toolkit";

import curDataReducer from "./features/curDataSlice";

export const store = configureStore({
  reducer: {
    curData: curDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
