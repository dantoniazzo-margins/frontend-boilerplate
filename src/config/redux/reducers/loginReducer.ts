import { createSlice } from "@reduxjs/toolkit";

interface loginState {
  email: string;
  password: string;
}

const initialState = { email: "", password: "" } as loginState;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = globalSlice.actions;

export default globalSlice.reducer;
