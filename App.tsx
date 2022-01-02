import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VehiclesScreen from './screens/Vehicles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Vehicles">
          <Stack.Screen name="Vehicles" component={VehiclesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
