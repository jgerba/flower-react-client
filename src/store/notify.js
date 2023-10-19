import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null,
    message: null,
    loading: false,
};

const notifySlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        applyError(state, action) {
            state.error = action.payload;
        },
        applyMessage(state, action) {
            state.message = action.payload;
        },
        applyLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const notifyActions = notifySlice.actions;
export default notifySlice.reducer;
