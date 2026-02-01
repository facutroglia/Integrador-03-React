import { createSlice } from "@reduxjs/toolkit";
import { CartStorage } from "./cartStorage";

const initialState = {
  cartItems: CartStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExistente = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (itemExistente) {
        itemExistente.quantity++;
        return;
      }
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    addQuantity: (state, action) => {
      const itemExistente = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (itemExistente) {
        itemExistente.quantity++;
        return;
      }
    },
    removeItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload,
        );
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeItem, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
