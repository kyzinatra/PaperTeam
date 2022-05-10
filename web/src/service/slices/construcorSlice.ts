import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
  padding?: { top: number; right: number; bottom: number; left: number };
}
let initialState: IInitialState = {
  horiz: {},
  vert: {},
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
    clear: state => initialState,
  },
});

const { set, clear, setAxis } = constructorSlice.actions;
export { set, clear, setAxis };
export default constructorSlice.reducer;
