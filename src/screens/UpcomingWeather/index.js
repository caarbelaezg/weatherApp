import React from 'react';
import { SafeAreaView, FlatList, ImageBackground } from 'react-native';

import { styles } from './styles';

import ListItem from '../../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
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
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
