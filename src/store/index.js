import { configureStore } from '@reduxjs/toolkit';

import bouqetReducer from './bouqets';
import styleReducer from './style';
import cartReducer from './cart';

const store = configureStore({
    reducer: { bouqets: bouqetReducer, style: styleReducer, cart: cartReducer },
});

export default store;
