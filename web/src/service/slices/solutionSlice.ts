import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ConsoleController from "../../utils/console/console";
import { API_URL, DEFAULT_FILE } from "../API";
import { AppDispatch } from "../redux/store";
import { set } from "./construcorSlice";

export interface IInitialState {
  solution: string[];
  isLoading: boolean;
  isError: boolean;
}
let initialState: IInitialState = {
  solution: [],
  isLoading: false,
  isError: false,
};

const logLoadInit = [
  ["blue", "INIT"],
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
    ConsoleController.log(thunkAPI.dispatch as AppDispatch, init ? logLoadInit : loadlog, "😋");
    thunkAPI.dispatch(set(result));
  }
);

const checkSuccess = [
  ["", "Your answer is absolutely "],
  ["green", "correct!"],
] as [string, string][];

const chackFail = [["", "Your answer isn't correct, try again"]] as [string, string][];

const checkSolution = createAsyncThunk(
  "solution/checkSolution",
  async (check: string[], thunkAPI) => {
    const result = await (await axios.get(API_URL + "/getSolution/?json=" + check[1])).data;
    if (result.includes(check[0]))
      ConsoleController.log(thunkAPI.dispatch as AppDispatch, checkSuccess, "🎉");
    else ConsoleController.log(thunkAPI.dispatch as AppDispatch, chackFail, "😥");
  }
);

const getSolution = createAsyncThunk("solution/getSolution", async (check: string, thunkAPI) => {
  const result = await (await axios.get(API_URL + "/getSolution/?json=" + check)).data;
  if (result[0] == "") {
    ConsoleController.log(
      thunkAPI.dispatch as AppDispatch,
      [
        ["", "There is no "],
        ["blue", "optimal"],
        ["", " solution"],
      ],
      "😣"
    );
    return { solution: [] };
  }
  return { solution: result };
});

export const solutionSlice = createSlice({
  name: "solution",
  initialState,
  reducers: {
    shift: state => {
      state.solution.shift();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadFile.fulfilled, (state, action) => {
        return { ...state, isLoading: false, isError: false };
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
const shift = solutionSlice.actions.shift;
export { loadFile, checkSolution, getSolution, shift };
export default solutionSlice.reducer;
