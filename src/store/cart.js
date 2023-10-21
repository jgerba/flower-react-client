import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], totalItems: 0 };

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);

            // add new item to cart
            // if already have an item => +1 to 'inCart' property
            // if 'inCart' property is empty => 2 - temporarly - update the base
            index === -1
                ? state.cartItems.push(action.payload)
                : state.cartItems[index].inCart
                ? (state.cartItems[index].inCart += 1)
                : (state.cartItems[index].inCart = 2);
        },

        increaseQuantity(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);

            // if 'inCart' property is empty => 2 - temporarly - update the base
            state.cartItems[index].inCart
                ? (state.cartItems[index].inCart += 1)
                : (state.cartItems[index].inCart = 2);
        },

        decreaseQuantity(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);

            // if quantity is more than 1 => -1 to quantity
            // else remove position from cart
            state.cartItems[index].inCart > 1
                ? (state.cartItems[index].inCart -= 1)
                : state.cartItems.splice(index, 1);
        },

        // remove from cart despite of quantity
        removePosition(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);

            state.cartItems.splice(index, 1);
        },

        emptyCart(state) {
            state.cartItems = [];
        },
    },
});

function findIndex(items, id) {
    return items.findIndex(item => item._id === id);
}

// calculate all items in the cart to show them in the widget
function calculateItems(state) {
    return state.cartItems.reduce(
        (sum, item) => sum + item.inCart,
        state.totalItems
    );
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
