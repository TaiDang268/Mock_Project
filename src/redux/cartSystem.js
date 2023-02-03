import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
  quantity: 0,
};
const cartSystem = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddCart: (state, action) => {
      console.log(action.payload);
      state.cart = [action.payload, ...state.cart];
    },
  },
});
export const { AddCart } = cartSystem.actions;
export default cartSystem.reducer;
