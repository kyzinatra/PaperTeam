import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAddTodoPayload {
  text: string;
  type: "error" | "success" | "info" | "warning";
  timeout?: number;
  id: string;
}

const initialState: IAddTodoPayload[] = [];

export const toastSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IAddTodoPayload>) => {
      return [...state, action.payload];
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((a) => a.id !== action.payload.id);
    },
  },
});
export const { add, remove } = toastSlice.actions;
export default toastSlice.reducer;
