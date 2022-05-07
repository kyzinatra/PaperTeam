import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      return [action.payload, ...state];
    },
  },
});
export const { add } = historySlice.actions;
export default historySlice.reducer;
