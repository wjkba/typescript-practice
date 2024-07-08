import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Session = {
  id: string;
  title: string;
  summary: string;
  date: string;
  email: string;
};

const initialState: Session[] = [];

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    add(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        summary: string;
        date: string;
        email: string;
      }>
    ) {
      const new_session: Session = action.payload;
      const index = state.findIndex(
        (session) => session.id === action.payload.id
      );
      if (index >= 0) {
        return;
      }
      state.push(new_session);
    },
    cancel(state, action: PayloadAction<string>) {
      return state.filter((session) => session.id !== action.payload);
    },
  },
});

export default sessionsSlice.reducer;
export const { add, cancel } = sessionsSlice.actions;
