import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
