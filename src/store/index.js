import { configureStore } from '@reduxjs/toolkit';

import bouqetReducer from './bouqets';

const store = configureStore({ reducer: { bouqets: bouqetReducer } });

export default store;
