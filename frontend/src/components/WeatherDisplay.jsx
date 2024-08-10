import React, { useState } from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weatherData, forecastData, onAddFavorite, isFavorite }) {
  const [unit, setUnit] = useState('C');

  const convertTemperature = (temp) => {
    if (unit === 'C') {
      return temp; 
    } else {
      return (temp * 9/5) + 32;
    }
  };

  const toggleUnit = () => {
    if (unit === 'C') {
      setUnit('F'); 
    } else {
      setUnit('C'); 
    }
  };

  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weatherData.name}</h2>
        <button onClick={() => onAddFavorite(weatherData.name)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <p className="weather-description">{weatherData.weather[0].description}</p>
      <p className="temperature">
        Temp: {convertTemperature(weatherData.main.temp).toFixed(1)}°{unit}
      </p>
      <button className="toggle-unit-btn" onClick={toggleUnit}>
        {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
      
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>{forecast.weather[0].description}</p>
            <p>
              Temp: {convertTemperature(forecast.main.temp).toFixed(1)}°{unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
