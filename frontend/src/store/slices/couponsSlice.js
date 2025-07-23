import { createSlice } from '@reduxjs/toolkit';

const couponsSlice = createSlice({
  name: 'coupons',
  initialState: [],
  reducers: {
    setCoupons(state, action) {
      return action.payload;
    },
  },
});

export const { setCoupons } = couponsSlice.actions;
export default couponsSlice.reducer;
