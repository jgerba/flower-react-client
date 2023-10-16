import { createSlice } from '@reduxjs/toolkit';

const initialState = { fullInfoPanel: false };

const styleSlice = createSlice({
    name: 'Styles',
    initialState,
    reducers: {
        showInfoPanel(state) {
            state.fullInfoPanel = true;
        },
        minimizeInfoPanel(state) {
            state.fullInfoPanel = false;
        },
    },
});

export const styleActions = styleSlice.actions;
export default styleSlice.reducer;
