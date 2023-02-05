import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
  quantity: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddCart: (state, action) => {
      state.cart.push(action.payload);
      // state.cart = [action.payload, ...state.cart];
    },
  },
});
export const { AddCart } = cartSlice.actions;
export default cartSlice.reducer;
