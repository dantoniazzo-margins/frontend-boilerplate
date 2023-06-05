import { createSlice } from '@reduxjs/toolkit';
import { IViewer } from '../interfaces/viewer';

interface viewerProps {
  viewer: IViewer;
}
const initialState = {} as viewerProps;

const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setViewer: (state, action) => {
      state.viewer = action.payload;
    },
  },
});

export const { setViewer } = viewerSlice.actions;

export const lastSnapshot = (state: any) => state.items;

export default viewerSlice.reducer;
