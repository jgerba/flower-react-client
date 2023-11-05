import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    orderItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            if (state.totalItems === 99) return;

            const index = findIndex(state.cartItems, action.payload._id);

            // add new item to cart
            // if already have an item => +1 to 'inCart' property
            index === -1
                ? state.cartItems.push(action.payload)
                : (state.cartItems[index].inCart += 1);

            state.totalItems = calculateItems(state);
            state.totalPrice = calculatePrice(state);
        },

        increaseQuantity(state, action) {
            if (state.totalItems === 99) return;

            const index = findIndex(state.cartItems, action.payload._id);
            state.cartItems[index].inCart += 1;

            state.totalItems = calculateItems(state);
            state.totalPrice = calculatePrice(state);
        },

        decreaseQuantity(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);

            // if quantity is more than 1 => -1 to quantity
            // else remove position from cart
            state.cartItems[index].inCart > 1
                ? (state.cartItems[index].inCart -= 1)
                : state.cartItems.splice(index, 1);

            state.totalItems = calculateItems(state);
            state.totalPrice = calculatePrice(state);
        },

        // remove from cart despite of quantity
        removePosition(state, action) {
            const index = findIndex(state.cartItems, action.payload._id);
            state.cartItems.splice(index, 1);

            state.totalItems = calculateItems(state);
            state.totalPrice = calculatePrice(state);
        },

        // show order at orderEdit maodal
        updateOrderItems(state, action) {
            state.orderItems = action.payload;

            state.totalPrice = calculatePrice(state, true);
        },

        increaseOrderQuantity(state, action) {
            const index = findIndex(state.orderItems, action.payload._id);
            state.orderItems[index].inCart += 1;

            state.totalPrice = calculatePrice(state, true);
        },

        decreaseOrderQuantity(state, action) {
            const index = findIndex(state.orderItems, action.payload._id);

            // if quantity is more than 1 => -1 to quantity
            // else remove position from order
            state.orderItems[index].inCart > 1
                ? (state.orderItems[index].inCart -= 1)
                : state.orderItems.splice(index, 1);

            state.totalPrice = calculatePrice(state, true);
        },

        // remove from order despite of quantity
        removeOrderPosition(state, action) {
            const index = findIndex(state.orderItems, action.payload._id);
            state.orderItems.splice(index, 1);

            state.totalPrice = calculatePrice(state, true);
        },

        emptyCart(state) {
            state.cartItems = [];
            state.orderItems = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

function findIndex(items, id) {
    return items.findIndex(item => item._id === id);
}

// calculate all items in the cart to show them in the widget
function calculateItems(state) {
    return state.cartItems.reduce((sum, item) => sum + item.inCart, 0);
}

// calculate total price of all items in the order/cart
function calculatePrice(state, order = false) {
    if (order)
        return state.orderItems.reduce(
            (sum, item) => sum + item.price * item.inCart,
            0
        );

    return state.cartItems.reduce(
        (sum, item) => sum + item.price * item.inCart,
        0
    );
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
