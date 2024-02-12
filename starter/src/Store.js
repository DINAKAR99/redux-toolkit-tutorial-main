import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
