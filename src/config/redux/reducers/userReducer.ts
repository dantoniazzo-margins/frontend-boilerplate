import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/API/User/user";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  isEmailConfirmed: false,
  photo: "",
  dateOfBirth: undefined,
  phoneNumber: 0,
  address: "",
} as IUser;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.isEmailConfirmed = payload.isEmailConfirmed;
      state.photo = payload.photo;
      state.dateOfBirth = payload.dateOfBirth;
      state.phoneNumber = payload.phoneNumber;
      state.address = payload.address;
    },
  },
});

export const { setUser } = globalSlice.actions;

export const lastSnapshot = (state: any) => state.items;

export default globalSlice.reducer;
