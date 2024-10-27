import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import TemperatureChart from './components/TemperatureChart';
import ErrorMessage from './components/ErrorMessage';

function WeatherDashboard() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
      const weatherData = await weatherResponse.json();
      setCurrentWeather(weatherData);

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
      const forecastData = await forecastResponse.json();
      setForecast(forecastData.daily);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          {currentWeather && <CurrentWeather weather={currentWeather} />}
        </Grid>
        <Grid item xs={12}>
          {forecast && <Forecast forecast={forecast} />}
        </Grid>
        <Grid item xs={12}>
          {forecast && <TemperatureChart forecast={forecast} />}
        </Grid>
        {error && <Grid item xs={12}><ErrorMessage error={error} /></Grid>}
      </Grid>
    </Container>
  );
}

export default WeatherDashboard;