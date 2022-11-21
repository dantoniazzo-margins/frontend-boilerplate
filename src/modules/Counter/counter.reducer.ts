import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  count: number;
}

const initialState = { count: 0 } as counterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
