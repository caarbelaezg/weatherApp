import React from 'react';
import { SafeAreaView, Text, FlatList, ImageBackground } from 'react-native';

import { styles } from './styles';

import ListItem from '../../components/ListItem';

const DATA = [
  {
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain'
      }
    ],
    dt_txt: '2022-08-30 16:00:00'
  },
  {
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain'
      }
    ],
    dt_txt: '2022-08-30 17:00:00'
  },
  {
    main: {
      temp: 294.94,
      feels_like: 294.74,
      temp_min: 292.84,
      temp_max: 294.94
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain'
      }
    ],
    dt_txt: '2022-08-30 18:00:00'
  },
  {
    main: {
      temp: 294.14,
      feels_like: 293.99,
      temp_min: 294.14,
      temp_max: 294.14
    },
    weather: [
      {
        main: 'Clouds',
        description: 'overcast clouds'
      }
    ],
    dt_txt: '2022-09-03 15:00:00'
  }
];

const UpcomingWeather = () => {
  const { container, image } = styles;
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/upcoming-weather.jpg')}
        style={image}
      >
        <Text> Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
