import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    currentLocation: null,
    error: null,
  },
  reducers: {
    setLocation(state, action) {
      state.currentLocation = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLocation, setError } = locationSlice.actions;
export default locationSlice.reducer;
