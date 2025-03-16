import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

export default store;
