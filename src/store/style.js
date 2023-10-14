import { createSlice } from '@reduxjs/toolkit';

const styleSlice = createSlice({
    name: 'Styles',
    initialState: { fullInfoPanel: false },
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
