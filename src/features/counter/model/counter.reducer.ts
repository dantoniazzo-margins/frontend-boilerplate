import { createSlice } from '@reduxjs/toolkit';

interface counterState {
  count: number;
}

const initialState = { count: 0 } as counterState;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.count += action.payload;
    },
    decrementCounter: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
