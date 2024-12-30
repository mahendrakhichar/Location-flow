import React from 'react';

const LocationModel = ({ location, closeModel }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Location Details</h2>
        <p>Address: {location.address}</p>
        <p>Coordinates: {location.coordinates}</p>
        <button onClick={closeModel}>Close</button>
      </div>
    </div>
  );
};

export default LocationModel;
