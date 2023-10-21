import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false };

const authSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        // save token as cookie
        logIn(state, action) {
            if (action.payload) {
                document.cookie = `token=${action.payload};path=/`;
            }
            state.isAuth = true;
        },

        // make cookie expired
        logOut(state) {
            document.cookie =
                'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            state.isAuth = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
