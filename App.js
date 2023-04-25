import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/components/Tabs';

import { useGetWeather } from './src/hooks/useGetWeather';

import { styles } from './styles';

const App = () => {
  const [loading, error, weather] = useGetWeather();
  const { container } = styles;

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default App;
