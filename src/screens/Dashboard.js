import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TripItem from '../components/TripItem';

const trips = [
  { id: '1', destination: 'Paris', date: '2024-09-20' },
  { id: '2', destination: 'Tokyo', date: '2024-10-05' },
];

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Minhas Viagens</Text>
      <FlatList
        data={trips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TripItem 
            trip={item} 
            onPress={() => navigation.navigate('TripDetails', { tripId: item.id })}
          />
        )}
      />
      <Button 
        title="Adicionar Nova Viagem" 
        onPress={() => navigation.navigate('AddTrip')} 
      />
    </View>
  );
};

export default Dashboard;
