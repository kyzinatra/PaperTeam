import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAddLog {
  data: JSX.Element | string;
  prefix?: string | boolean;
  id: string;
  CreateTime?: number | Date;
}

const initialState: IAddLog[] = [];

export const consoleSlice = createSlice({
  name: "console",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IAddLog>) => {
      return [...state, action.payload];
    },
    clear: state => {
      return [];
    },
  },
});
export const { add, clear } = consoleSlice.actions;
export default consoleSlice.reducer;
