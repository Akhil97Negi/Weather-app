import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import NavBar from './components/Navbar';
import Favorites from './components/Favroites';  
import './App.css'; 

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:5000/favorites')
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  const handleCitySearch = async (city) => {
    try {
      const apiKey = '055bc1024e5b56ae532f70ffe87eb754';
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      if (weatherData.cod !== 200) {
        alert('City not found!');
        return;
      }

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      setWeatherData(weatherData);
      setForecastData(forecastData);
      setCurrentCity(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  const addFavorite = async (city) => {
    if (favorites.some(fav => fav.city === city)) {
      alert('City is already in your favorites!');
      return;
    }

    const newFavorite = { city };
    try {
      await fetch('http://localhost:5000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFavorite),
      });
      setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
    } catch (error) {
      console.error('Error adding favorite:', error);
      alert('Failed to add favorite. Please try again.');
    }
  };

  const removeFavorite = async (city) => {
    const updatedFavorites = favorites.filter(fav => fav.city !== city);
    try {
      await fetch(`http://localhost:5000/favorites/${city}`, {
        method: 'DELETE',
      });
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error removing favorite:', error);
      alert('Failed to remove favorite. Please try again.');
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search onCitySearch={handleCitySearch} />
              {weatherData && forecastData && (
                <WeatherDisplay 
                  weatherData={weatherData} 
                  forecastData={forecastData} 
                  onAddFavorite={addFavorite}
                  isFavorite={favorites.some(fav => fav.city === currentCity)}
                />
              )}
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites} 
              onCitySelect={handleCitySearch} 
              onRemoveFavorite={removeFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
