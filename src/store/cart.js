import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [] };

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = state.cartItems.findIndex(
                item => item._id === action.payload._id
            );
            index === -1
                ? state.cartItems.push(action.payload)
                : state.cartItems[index].inCart
                ? (state.cartItems[index].inCart += 1)
                : (state.cartItems[index].inCart = 2);
        },

        removeFromCart(state, action) {
            const index = state.cartItems.findIndex(
                item => item._id === action.payload._id
            );
            state.cartItems[index].inCart > 1
                ? (state.cartItems[index].inCart -= 1)
                : state.cartItems.splice(index, 1);
        },

        emptyCart(state) {
            state.cartItems = [];
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
