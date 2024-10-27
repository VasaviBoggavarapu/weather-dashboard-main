import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);
    setCurrentWeather(null);
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76b56663a67c46c05ce21489509f54f8&units=metric`
      );
      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }
      const weatherData = await weatherResponse.json();
      setCurrentWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Weather Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        {error && (
          <Grid item xs={12}>
            <ErrorMessage error={error} />
          </Grid>
        )}
        {currentWeather && (
          <Grid item xs={12}>
            <CurrentWeather weather={currentWeather} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
