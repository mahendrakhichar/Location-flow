import React, { useState, useEffect } from 'react';
import AddressForm from '../components/AddressForm';
import AddressList from '../components/AddressList';
import { getSavedLocations } from '../api/apiService.js'; // API service to fetch saved locations

const ManageAddress = () => {
  const [locations, setLocations] = useState([]);

  // Fetch saved locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await getSavedLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching saved locations', error);
      }
    };
    fetchLocations();
  }, []);

  const handleLocationSaved = () => {
    // Fetch updated list after saving a location
    const fetchLocations = async () => {
      try {
        const locationsData = await getSavedLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching saved locations', error);
      }
    };
    fetchLocations();
  };

  return (
    <div className="manage-address-container">
      <h1 className="text-3xl font-bold text-center">Manage Your Addresses</h1>
      
      <AddressForm onLocationSaved={handleLocationSaved} />
      <AddressList locations={locations} />
    </div>
  );
};

export default ManageAddress;
