import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        // Add all slices here
        cart: cartReducer,
        modal: modalReducer,
    },
});