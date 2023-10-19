import { configureStore } from '@reduxjs/toolkit';

import bouqetReducer from './bouqets';
import styleReducer from './style';
import cartReducer from './cart';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        bouqets: bouqetReducer,
        style: styleReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store;
