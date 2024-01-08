import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { exampleApi } from "../api/exampleApi";
export interface CounterState {
  value: number;
  data: any[];
}

const initialState: CounterState = {
  value: 0,
  data: [],
};
export const exampleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      exampleApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
