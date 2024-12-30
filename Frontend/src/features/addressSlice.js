import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    savedAddresses: [],
  },
  reducers: {
    addAddress(state, action) {
      state.savedAddresses.push(action.payload);
    },
    updateAddress(state, action) {
      const index = state.savedAddresses.findIndex(addr => addr.id === action.payload.id);
      if (index !== -1) {
        state.savedAddresses[index] = action.payload;
      }
    },
    deleteAddress(state, action) {
      state.savedAddresses = state.savedAddresses.filter(addr => addr.id !== action.payload);
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
