import React from 'react';

const AddressList = ({ locations }) => {
  return (
    <div className="locations-list">
      <h2>Saved Addresses</h2>
      <ul>
        {locations.length > 0 ? (
          locations.map((location) => (
            <li key={location.id}>
              <div>
                <p>{location.address}</p>
                <button onClick={() => alert(`Coordinates: ${location.coordinates}`)}>
                  View Details
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No locations saved yet.</p>
        )}
      </ul>
    </div>
  );
};

export default AddressList;
