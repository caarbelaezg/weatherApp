import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={40} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

export default ListItem;
