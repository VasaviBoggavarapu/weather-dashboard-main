import { Card, CardContent, Typography } from '@mui/material';
import './index.css';
function CurrentWeather({ weather }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography variant="body1">Temperature: {weather.main.temp}°C</Typography>
        <Typography variant="body1">Humidity: {weather.main.humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {weather.wind.speed} m/s</Typography>
        <Typography variant="body1">Condition: {weather.weather[0].description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather;