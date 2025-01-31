import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counts: 0,
};

export const counterTwoSlice = createSlice({
  name: "countertwo",
  initialState,
  reducers: {
    increment: (state) => {
      state.counts += 1;
    },
    decrement: (state) => {
      if (state.counts > 0) {
        state.counts -= 1;
      }
    },
    resets: (state) => {
      state.counts = 0;
    },
    addAmount: (state, action) => {
      state.counts += action.payload;
    },
  },
});

export const { increment, decrement, resets, addAmount } =
  counterTwoSlice.actions;

export default counterTwoSlice.reducer;
