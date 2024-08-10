


import React from 'react';
import './Favroites.css'

function Favorites({ favorites, onCitySelect, onRemoveFavorite }) {
  return (
    <div className="favorites-container">
      <h3>Favorite Cities</h3>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(fav => (
            <li key={fav.city}>
              <span 
                onClick={() => onCitySelect(fav.city)}
              >
                {fav.city}
              </span>
              <button 
                onClick={() => onRemoveFavorite(fav.city)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite cities added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
