import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector as selectorHook } from "react-redux";
import consoleReducer from "../slices/consoleSlice";
import construcorReducer from "../slices/construcorSlice";
import historyReducer from "../slices/historySlice";
import constructorReducer from "../slices/solutionSlice";

export const store = configureStore({
  reducer: {
    console: consoleReducer,
    construcor: construcorReducer,
    history: historyReducer,
    solution: constructorReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
