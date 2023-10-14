import { createSlice } from '@reduxjs/toolkit';

const bouqetsSlice = createSlice({
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

export function applyData(data) {}

export const bouqetsActions = bouqetsSlice.actions;
export default bouqetsSlice.reducer;
