import { createSlice } from '@reduxjs/toolkit';

const initialState = { fullInfoPanel: false };

// minimize info panel in the upper right corner at home and catalogue screen after scrolling
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
