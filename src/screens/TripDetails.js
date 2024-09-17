import React from 'react';
import { View, Text, Button } from 'react-native';

const TripDetails = ({ route, navigation }) => {
  const { tripId } = route.params;

  return (
    <View>
      <Text>Detalhes da Viagem {tripId}</Text>
      {/* Exibir mais detalhes e permitir edições */}
      <Button 
        title="Adicionar Atividade" 
        onPress={() => {/* Lógica para adicionar atividades */}} 
      />
    </View>
  );
};

export default TripDetails;
