import { WEATHER_API_KEY } from '../constants/weather';

export const fetchWeatherData = async (lat, lon) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};
