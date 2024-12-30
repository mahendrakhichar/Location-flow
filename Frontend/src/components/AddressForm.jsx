import React, { useState } from 'react';
import { saveLocation } from '../api/apiService'; // Make sure to import the API service

const AddressForm = ({ onLocationSaved }) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleSaveLocation = async () => {
    if (address && coordinates) {
      try {
        const locationData = { address, coordinates };
        await saveLocation(locationData);
        onLocationSaved(); // Notify parent to update the list
        setAddress('');
        setCoordinates(null); // Reset form
      } catch (error) {
        console.error('Error saving location', error);
      }
    } else {
      alert('Please fill in both address and coordinates!');
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Address</h2>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="input-class"
      />
      {/* Google Maps or manual input for coordinates */}
      <button onClick={handleSaveLocation}>Save Location</button>
    </div>
  );
};

export default AddressForm;
