import React, { useState } from 'react';
import './styles.css'; // Import the general styles

const PropertySearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Enter location or title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="custom-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PropertySearchComponent;
