import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ManageAddress from './pages/ManageAddress';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-address" element={<ManageAddress />} />
        {/* Add other routes for viewing locations, etc. */}
      </Routes>
    </Router>
  );
};

export default App;
