import { createSlice } from "@reduxjs/toolkit";

interface globalProps {
  browser: string;
}

const initialState = { browser: "" } as globalProps;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setBrowser: (state, action) => {
      state.browser = action.payload;
    },
  },
});

export const { setBrowser } = globalSlice.actions;

export const lastSnapshot = (state: any) => state.items;

export default globalSlice.reducer;
