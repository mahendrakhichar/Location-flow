import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/locationSlice';
import addressReducer from './features/addressSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    address: addressReducer,
  },
});
