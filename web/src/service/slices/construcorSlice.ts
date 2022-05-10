import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
  padding?: { top: number; right: number; bottom: number; left: number };
  isOverflow: boolean;
}
let initialState: IInitialState = {
  horiz: {},
  vert: {},
  isOverflow: false,
};

export interface ISetAxisConstructor {
  axisName: string;
  value: string;
}

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IInitialState>) => {
      return { ...state, ...action.payload };
    },
    setAxis: (state, action: PayloadAction<ISetAxisConstructor>) => {
      const { axisName, value } = action.payload;
      if (state["vert"][axisName]) state["vert"][axisName] = value;
      else state["horiz"][axisName] = value;
      return state;
    },
    clearOverflow: s => ({ ...s, isOverflow: false }),
    setSize: (state, action: PayloadAction<{ type: "width" | "height"; size: number }>) => {
      const { type, size } = action.payload;
      const { vert, horiz } = state;

      let width = Object.keys(vert).length;
      let height = Object.keys(horiz).length;
      switch (type) {
        case "width":
          width = size;
          break;
        case "height":
          height = size;
          break;
      }
      if (width + height > 26 || size == 0) {
        state.isOverflow = true;
        return;
      }
      state.vert = {};
      state.horiz = {};
      const LETTER_A_CODE = 65;
      for (let i = LETTER_A_CODE; i < LETTER_A_CODE + width; i++) {
        state.vert = { ...state.vert, [String.fromCharCode(i)]: "1".repeat(height + 1) };
      }
      for (let i = LETTER_A_CODE + width; i < LETTER_A_CODE + width + height; i++) {
        state.horiz = { ...state.horiz, [String.fromCharCode(i)]: "1".repeat(width + 1) };
      }
    },
    clear: state => initialState,
  },
});

const { set, clear, setAxis, setSize, clearOverflow } = constructorSlice.actions;
export { set, clear, setAxis, setSize, clearOverflow };
export default constructorSlice.reducer;
