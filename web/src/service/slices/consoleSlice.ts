import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAddLog {
  data: [string, string][];
  prefix?: string | boolean;
  id: string;
  CreateTime?: number | Date;
}
const initialState: IAddLog[] = [
  {
    id: "000000",
    data: [
      ["green", "kyzintra@Ubuntu20.04.4 "],
      ["purple", "MINGW64 "],
      ["", "~"],
      ["blue", " (master)"],
    ],
    CreateTime: Date.now(),
  },
];

export const consoleSlice = createSlice({
  name: "console",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IAddLog>) => {
      return [...state, action.payload];
    },
    clear: state => {
      return initialState;
    },
  },
});
export const { add, clear } = consoleSlice.actions;
export default consoleSlice.reducer;
