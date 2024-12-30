import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold text-center">Welcome to Our Location Service</h1>
      
      <div className="options">
        <Link to="/manage-address" className="btn btn-primary">
          Manage Addresses
        </Link>
        <Link to="/view-locations" className="btn btn-secondary">
          View Saved Locations
        </Link>
      </div>
    </div>
  );
};

export default Home;
