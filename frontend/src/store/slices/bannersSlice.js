import { createSlice } from '@reduxjs/toolkit';

const bannersSlice = createSlice({
  name: 'banners',
  initialState: [],
  reducers: {
    setBanners(state, action) {
      return action.payload;
    },
  },
});

export const { setBanners } = bannersSlice.actions;
export default bannersSlice.reducer;
