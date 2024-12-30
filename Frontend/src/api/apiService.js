import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to save a location/address
export const saveLocation = async (locationData) => {
  try {
    const response = await api.post('/save-location', locationData);
    return response.data;
  } catch (error) {
    console.error('Error saving location:', error);
    throw error;
  }
};

// Function to get saved locations
export const getSavedLocations = async () => {
  try {
    const response = await api.get('/locations');
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};

