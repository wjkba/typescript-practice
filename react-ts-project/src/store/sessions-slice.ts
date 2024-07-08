import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Session = {
  name: string;
  description: string;
  date: string;
};

const initialState: Session[] = [];

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    add(
      state,
      action: PayloadAction<{ name: string; description: string; date: string }>
    ) {
      const new_session = {
        name: action.payload.name,
        description: action.payload.description,
        date: action.payload.date,
      };
      state.push(new_session);
    },
  },
});

export default sessionsSlice.reducer;
export const { add } = sessionsSlice.actions;
