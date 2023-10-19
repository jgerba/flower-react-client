import { configureStore } from '@reduxjs/toolkit';

import bouqetReducer from './bouqets';
import styleReducer from './style';
import cartReducer from './cart';
import authReducer from './auth';
import notifyReducer from './notify';

const store = configureStore({
    reducer: {
        bouqets: bouqetReducer,
        style: styleReducer,
        cart: cartReducer,
        auth: authReducer,
        notify: notifyReducer,
    },
});

export default store;
