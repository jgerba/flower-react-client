import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null,
    message: null,
    isLoading: false,
};

// show pop-ups in the bottom right corner of the main
// (to the top of footer)
const notifySlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        applyError(state, action) {
            state.error = action.payload;
        },

        clearError(state) {
            state.error = null;
        },

        applyMessage(state, action) {
            state.message = action.payload;
        },

        clearMessage(state) {
            state.message = null;
        },

        applyLoading(state) {
            state.isLoading = true;
        },

        clearLoading(state) {
            state.isLoading = false;
        },
    },
});

export const notifyActions = notifySlice.actions;
export default notifySlice.reducer;
