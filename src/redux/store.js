import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { saveCartToStorage } from "./cartStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  saveCartToStorage(state.cart.cartItems);
});
