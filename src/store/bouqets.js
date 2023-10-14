import { createSlice } from '@reduxjs/toolkit';

const bouqetSlice = createSlice({
    name: 'Bouquets',
    initialState: { bouqets: [], searchValue: '' },
    reducers: {
        applyBouquets(state, action) {
            state.bouqets = action.payload;
        },
        applySearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const bouqetActions = bouqetSlice.actions;
export default bouqetSlice.reducer;
