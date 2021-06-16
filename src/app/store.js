import { configureStore } from '@reduxjs/toolkit';
import starshipReducer from '../features/StarshipSlice';

export const store = configureStore({
  reducer: {
    starshipReducer: starshipReducer,
  },
});
