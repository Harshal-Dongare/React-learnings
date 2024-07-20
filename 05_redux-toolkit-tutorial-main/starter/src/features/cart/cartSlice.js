import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "/react-useReducer-cart-project";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        // Try to parse the response as JSON
        const data = await response.json();
        return data;
    } catch (error) {
        // Log the error and the response
        console.error("Fetch error:", error);
        throw error;
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems?.filter(
                (item) => item.id !== itemId
            );
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems?.find(
                (item) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems?.find(
                (item) => item.id === payload.id
            );

            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems?.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
            state.isLoading = false;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
