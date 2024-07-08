import { configureStore } from "@reduxjs/toolkit";
import sessionsSlice from "./sessions-slice";

export const store = configureStore({
  reducer: {
    sessions: sessionsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
