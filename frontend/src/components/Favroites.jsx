import React from 'react';
import './Favroites.css';

function Favorites({ favorites, onCitySelect, onRemoveFavorite }) {
  return (
    <div className="favorites-container">
      <h3 className="favorites-title">Favorite Cities</h3>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map(fav => (
            <li key={fav.id} className="favorites-item">  
              <span 
                className="favorite-city-name"
                onClick={() => onCitySelect(fav.city)}
              >
                {fav.city}
              </span>
              <button 
                className="remove-favorite-btn"
                onClick={() => onRemoveFavorite(fav.city)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-favorites">No favorite cities added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
