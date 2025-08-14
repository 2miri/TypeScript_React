import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ num1: number; num2: number }>
    ) => {
      state.count += action.payload.num1 + action.payload.num2;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
