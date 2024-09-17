import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/screens/Dashboard';
import AddTrip from './src/screens/AddTrip';
import TripDetails from './src/screens/TripDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddTrip" component={AddTrip} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
