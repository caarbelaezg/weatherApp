import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import { fetchWeatherData } from '../services/weather';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [weather, setWeather] = useState([]);
  const [lon, setLon] = useState([]);
  const [lat, setLlat] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLlat(location.coords.latitude);
      setLon(location.coords.longitude);
      try {
        const data = await fetchWeatherData(lat, lon);
        setWeather(data);
        setLoading(false);
      } catch (e) {
        setError('Could not fetch weather:');
      } finally {
        setLoading(false);
      }
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
