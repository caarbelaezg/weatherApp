import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

import { weatherType } from '../../utils/weatherType';

import moment from 'moment';

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={40} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

export default ListItem;
