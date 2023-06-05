import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/entities/user/model/interfaces/user';

interface userProps {
  user: IUser;
}
const initialState = {} as userProps;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const lastSnapshot = (state: any) => state.items;

export default userSlice.reducer;
