import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ConsoleController from "../../utils/console/console";
import { API_URL, DEFAULT_FILE } from "../API";
import { AppDispatch } from "../redux/store";
import { set } from "./construcorSlice";

export interface IInitialState {
  horiz: { [key: string]: string };
  vert: { [key: string]: string };
  padding?: { top: number; right: number; bottom: number; left: number };
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
  "solution/load",
  async ({ path, init }: { path: string; init?: boolean }, thunkAPI) => {
    const result = await (await axios.get(API_URL + "/getJSON/?path=" + path)).data;
    ConsoleController.log(thunkAPI.dispatch as AppDispatch, init ? logLoadInit : loadlog, true);
    thunkAPI.dispatch(set(result));
    return {};
  }
);

const checkSuccess = [
  ["", "Your answer is absolutely "],
  ["green", "correct!"],
] as [string, string][];

const chackFail = [["", "Your answer isn't correct, try again"]] as [string, string][];

const checkSolution = createAsyncThunk(
  "solution/checkSolution",
  async (check: string, thunkAPI) => {
    const result = await (await axios.get(API_URL + "/getSolution/?path=" + DEFAULT_FILE)).data;
    if (result.includes(check))
      ConsoleController.log(thunkAPI.dispatch as AppDispatch, checkSuccess, "🎉");
    else ConsoleController.log(thunkAPI.dispatch as AppDispatch, chackFail, "😥");
  }
);

const getSolution = createAsyncThunk("solution/getSolution", async (check: string, thunkAPI) => {
  const resultStr = await (await axios.get(API_URL + "/getSolution/?path=" + DEFAULT_FILE)).data;
  const result: string[] = JSON.parse(resultStr.replace(/'/g, '"'));
  return result;
});

export const solutionSlice = createSlice({
  name: "solution",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadFile.fulfilled, (state, action) => {
        return { ...state, ...action.payload, isLoading: false, isError: false };
      })
      .addCase(loadFile.pending, state => {
        return { ...state, isLoading: true, isError: false };
      })
      .addCase(loadFile.rejected, state => {
        return { ...state, isLoading: false, isError: true };
      })
      .addCase(checkSolution.fulfilled, state => {
        return { ...state, isLoading: false, isError: false };
      })
      .addCase(checkSolution.pending, state => {
        return { ...state, isLoading: true, isError: false };
      })
      .addCase(checkSolution.rejected, state => {
        return { ...state, isLoading: false, isError: true };
      })
      .addCase(getSolution.fulfilled, (state, action) => {
        return { ...state, ...action.payload, isLoading: false, isError: false };
      })
      .addCase(getSolution.pending, state => {
        return { ...state, isLoading: true, isError: false };
      })
      .addCase(getSolution.rejected, state => {
        return { ...state, isLoading: false, isError: true };
      });
  },
});

export { loadFile, checkSolution };
export default solutionSlice.reducer;
