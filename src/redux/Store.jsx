import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './restaurantsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer,
  },
});
