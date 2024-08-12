// import React, { useState } from 'react';
// import './WeatherDisplay.css';

// function WeatherDisplay({ weatherData, forecastData, onAddFavorite, isFavorite }) {
//   const [unit, setUnit] = useState('C');

//   const convertTemp = (temp) => {
//     return unit === 'C' ? temp : (temp * 9/5) + 32;
//   };

//   const toggleUnit = () => {
//     setUnit(unit === 'C' ? 'F' : 'C');
//   };

//   const handleAddFavorite = async (city) => {
//     try {
//       await onAddFavorite(city);
//       alert(`"${city}" has been added to your favorites!`); // Show alert message
//     } catch (error) {
//       console.error('Error adding favorite:', error);
//       alert('Failed to add favorite. Please try again.'); // Error alert message
//     }
//   };

//   const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

//   return (
//     <div className="weather-card">
//       <div className="weather-header">
//         <h2>{weatherData.name}</h2>
//         <button onClick={() => handleAddFavorite(weatherData.name)}>
//           {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//         </button>
//       </div>
//       <p className="weather-description">{weatherData.weather[0].description}</p>
//       <p className="temperature">
//         Temp: {convertTemp(weatherData.main.temp).toFixed(1)}°{unit}
//       </p>
//       <button className="toggle-unit-btn" onClick={toggleUnit}>
//         {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
//       </button>
      
//       <h3>5-Day Forecast</h3>
//       <div className="forecast-grid">
//         {dailyForecasts.map((forecast, index) => (
//           <div key={index} className="forecast-day">
//             <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
//             <p>{forecast.weather[0].description}</p>
//             <p>
//               Temp: {convertTemp(forecast.main.temp).toFixed(1)}°{unit}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WeatherDisplay;



import React, { useState } from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weatherData, forecastData, onAddFavorite, isFavorite }) {
  const [unit, setUnit] = useState('C');

  const convertTemp = (temp) => {
    return unit === 'C' ? temp : (temp * 9/5) + 32;
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const handleAddFavorite = async (city) => {
    try {
      await onAddFavorite(city);
      alert(`"${city}" has been added to your favorites!`);
    } catch (error) {
      console.error('Error adding favorite:', error);
      alert('Failed to add favorite. Please try again.');
    }
  };

  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weatherData.name}</h2>
        <button onClick={() => handleAddFavorite(weatherData.name)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <p className="weather-description">{weatherData.weather[0].description}</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
        alt={weatherData.weather[0].description} 
        className="weather-icon" 
      />
      <p className="temperature">
        Temp: {convertTemp(weatherData.main.temp).toFixed(1)}°{unit}
      </p>
      <button className="toggle-unit-btn" onClick={toggleUnit}>
        {unit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
      
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
              alt={forecast.weather[0].description} 
              className="forecast-icon" 
            />
            <p>{forecast.weather[0].description}</p>
            <p>
              Temp: {convertTemp(forecast.main.temp).toFixed(1)}°{unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
