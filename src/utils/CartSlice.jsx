import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },

        removeCart: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addToCart, removeCart, clearCart } = CartSlice.actions

export default CartSlice.reducer;