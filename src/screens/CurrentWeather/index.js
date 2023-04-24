import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  const {
    bodyWrapper,
    container,
    description,
    feels,
    highLow,
    highLowWrapper,
    message,
    temp,
    wrapper
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>High: 8 </Text>
          <Text style={highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={bodyWrapper}>
        <Text style={description}>Its sunny</Text>
        <Text style={message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
