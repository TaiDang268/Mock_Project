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
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});
export const { AddCart,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
