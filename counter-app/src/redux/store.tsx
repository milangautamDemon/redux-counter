import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    countApp: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
