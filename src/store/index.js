import { configureStore } from '@reduxjs/toolkit';

import bouqetsReducer from './bouqets';

const store = configureStore({ reducer: { bouqets: bouqetsReducer } });

export default store;
