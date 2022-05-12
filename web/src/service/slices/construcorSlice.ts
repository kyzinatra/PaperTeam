import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../API";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
  padding?: { top: number; right: number; bottom: number; left: number };
  difficulty?: 1 | 2 | 3;
  isOverflow: boolean;
  isError: boolean;
  isLoading: boolean;
}
let initialState: IInitialState = {
  horiz: {},
  vert: {},
  isOverflow: false,
  isError: false,
  isLoading: false,
};

export interface ISetAxisConstructor {
  axisName: string;
  value: string;
}

const setTask = createAsyncThunk("constructor/setTask", async (difficulty: 1 | 2 | 3, thunkAPI) => {
  const result = await (await axios.get(API_URL + "/getTask/?difficulty=" + difficulty)).data;
  return result;
});

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IInitialState>) => {
      return { ...state, ...action.payload };
    },
    setDifficulty: (state, action: PayloadAction<1 | 2 | 3>) => {
      return { ...state, difficulty: action.payload };
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
      for (let i = LETTER_A_CODE; i < LETTER_A_CODE + height; i++) {
        state.horiz = { ...state.horiz, [String.fromCharCode(i)]: "1".repeat(width + 1) };
      }
      for (let i = LETTER_A_CODE + height; i < LETTER_A_CODE + width + height; i++) {
        state.vert = { ...state.vert, [String.fromCharCode(i)]: "1".repeat(height + 1) };
      }
    },
    clear: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(setTask.fulfilled, (state, { payload }) => ({
        ...state,
        ...payload,
        isError: false,
        isLoading: false,
      }))
      .addCase(setTask.rejected, (state, { payload }) => ({
        ...state,
        isError: true,
        isLoading: false,
      }))
      .addCase(setTask.pending, (state, { payload }) => ({
        ...state,
        isError: false,
        isLoading: true,
      }));
  },
});

const { set, clear, setAxis, setSize, clearOverflow, setDifficulty } = constructorSlice.actions;
export { set, clear, setAxis, setSize, clearOverflow, setTask, setDifficulty };
export default constructorSlice.reducer;
