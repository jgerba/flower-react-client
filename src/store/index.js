import { configureStore } from '@reduxjs/toolkit';

import bouqetReducer from './bouqets';
import styleReducer from './style';

const store = configureStore({
    reducer: { bouqets: bouqetReducer, style: styleReducer },
});

export default store;
