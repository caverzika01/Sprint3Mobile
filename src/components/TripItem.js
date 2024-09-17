import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TripItem = ({ trip, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>Destino: {trip.destination}</Text>
        <Text>Data: {trip.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TripItem;
