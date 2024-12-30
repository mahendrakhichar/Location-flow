// wrap all the components here
import React, { useState, useEffect } from 'react';
import AddressForm from 'components/AddressForm.jsx';
import AddressList from 'components/AddressList';
import LocationModel from 'components/LocationModel';
import MapComponent from 'components/MapComponent';
import { getSavedLocations } from './apiService'; // API service to fetch saved locations

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  const handleLocationSelect = (coords) => {
    // Handle location selection from the map
    console.log('Selected coordinates:', coords);
  };

  const closeModel = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="location-page">
      <h1>Location/Address Management</h1>

      <AddressForm onLocationSaved={handleLocationSaved} />
      <AddressList locations={locations} />

      {/* Show location model if a location is selected */}
      {selectedLocation && <LocationModel location={selectedLocation} closeModel={closeModel} />}

      {/* Google Map Component */}
      <MapComponent onLocationSelect={handleLocationSelect} />
    </div>
  );
};

export default LocationPage;
