import React, { useState } from 'react';
import './Search.css';

function Search({ onCitySearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onCitySearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
