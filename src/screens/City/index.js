import React from 'react';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';
import IconText from '../../components/IconText';

import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseWrapper,
    riseSetText,
    rowLayout
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/medellin.jpg')}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, riseWrapper]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText={moment(sunrise).format('h:mm a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText={moment(sunset).format('h:mm a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
