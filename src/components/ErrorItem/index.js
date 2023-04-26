import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

const ErrorItem = () => {
  const { container, errorMessage } = styles;
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry something went wrong</Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  );
};

export default ErrorItem;
