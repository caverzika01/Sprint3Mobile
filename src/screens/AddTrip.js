import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddTrip = ({ navigation }) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleAddTrip = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Adicionar Nova Viagem</Text>
      <TextInput
        placeholder="Destino"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        placeholder="Data"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Salvar" onPress={handleAddTrip} />
    </View>
  );
};

export default AddTrip;
