import { configureStore } from '@reduxjs/toolkit';
import { s__product } from './slices/product.slice';

const store = configureStore({
  reducer: {
    products: s__product.reducer,
  },
  devTools: true
});

export default store;