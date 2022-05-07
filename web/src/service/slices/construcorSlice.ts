import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
}

let initialState: IInitialState = {
  horiz: {},
  vert: {},
};

if (process.env.NODE_ENV == "development") {
  initialState = {
    horiz: { A: "10101011", B: "00111100", C: "01011010" },
    vert: { D: "0011", E: "1111", F: "1100", G: "1100", H: "1111", I: "0011", V: "0011" },
  };
}

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
export const { set, clear, setAxis } = constructorSlice.actions;
export default constructorSlice.reducer;
