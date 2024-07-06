import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

// potrzebne do tworzenia custom hooka useDispatch
export type AppDispatch = typeof store.dispatch;

// potrzebne do tworzenia custom hooka useSelector
export type RootState = ReturnType<typeof store.getState>