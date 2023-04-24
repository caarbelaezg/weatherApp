import React from 'react';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';
import IconText from '../../components/IconText';

const City = () => {
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
        <Text style={[cityText, cityName]}>Envigado</Text>
        <Text style={[cityText, countryName]}>Colombia</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="800"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, riseWrapper]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText="10:46:56 am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText="17:28:55 pm"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
