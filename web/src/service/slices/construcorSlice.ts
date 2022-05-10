import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ConsoleController from "../../utils/console/console";
import { API_URL, DEFAULT_FILE } from "../API";
import { AppDispatch } from "../redux/store";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
  isLoading: boolean;
  isError: boolean;
}
let initialState: IInitialState = {
  horiz: {},
  vert: {},
  isLoading: false,
  isError: false,
};

export interface ISetAxisConstructor {
  axisName: string;
  value: string;
}

const logLoadInit = [
  ["blue", "@@INIT"],
  ["", " default case"],
] as [string, string][];
const loadlog = [
  ["green", "Success"],
  ["", " load file!"],
] as [string, string][];

const loadFile = createAsyncThunk(
  "constructor/load",
  async ({ path, init }: { path: string; init?: boolean }, thunkAPI) => {
    try {
      thunkAPI.dispatch(startLoad());
      const result = await (await axios.get(API_URL + "/getJSON/?path=" + path)).data;
      ConsoleController.log(thunkAPI.dispatch as AppDispatch, init ? logLoadInit : loadlog, true);
      thunkAPI.dispatch(endLoad());
      return result;
    } catch (e) {
      thunkAPI.dispatch(errorLoad());
    }
  }
);

const checkSuccess = [
  ["", "Your answer is absolutely "],
  ["green", "correct!"],
] as [string, string][];

const chackFail = [["", "Your answer isn't correct, try again"]] as [string, string][];

const checkSolution = createAsyncThunk(
  "constructor/checkSolution",
  async (check: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(startLoad());
      const resultStr = await (
        await axios.get(API_URL + "/getSolution/?path=" + DEFAULT_FILE)
      ).data;
      console.log(resultStr);
      const result: string[] = JSON.parse(resultStr.replace(/'/g, '"'));
      if (result.includes(check))
        ConsoleController.log(thunkAPI.dispatch as AppDispatch, checkSuccess, "🎉");
      else ConsoleController.log(thunkAPI.dispatch as AppDispatch, chackFail, "😥");
      thunkAPI.dispatch(endLoad());
    } catch (e) {
      thunkAPI.dispatch(errorLoad());
    }
  }
);

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
    startLoad: state => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    errorLoad: state => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    endLoad: state => ({
      ...state,
      isLoading: false,
      isError: false,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(loadFile.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(checkSolution.fulfilled, (state, action) => {
        return { ...state };
      });
  },
});

const { set, clear, setAxis, startLoad, endLoad, errorLoad } = constructorSlice.actions;
export { set, clear, setAxis, loadFile, startLoad, endLoad, errorLoad, checkSolution };
export default constructorSlice.reducer;
