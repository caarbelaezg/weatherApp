import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import RowText from '../../components/RowText';

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
        <RowText
          messageOne="High: 8"
          messageTwo="Low: 6"
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne="Its sunny"
        messageTwo="Its perfect t-shirt weather"
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;
