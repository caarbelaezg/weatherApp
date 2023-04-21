import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
  {
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain',
      },
    ],
    dt_txt: '2022-08-30 16:00:00',
  },
  {
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain',
      },
    ],
    dt_txt: '2022-08-30 17:00:00',
  },
  {
    main: {
      temp: 294.94,
      feels_like: 294.74,
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: 'Rain',
        description: 'light rain',
      },
    ],
    dt_txt: '2022-08-30 18:00:00',
  },
  {
    main: {
      temp: 294.14,
      feels_like: 293.99,
      temp_min: 294.14,
      temp_max: 294.14,
    },
    weather: [
      {
        main: 'Clouds',
        description: 'overcast clouds',
      },
    ],
    dt_txt: '2022-09-03 15:00:00',
  },
];

const Item = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={40} color="white" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-weather.jpg')}
        style={styles.image}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
