import React from 'react';
import Auth from './src/components/Screens/Auth/Auth';
import AfterAuth from './src/components/Screens/AfterAuth/AfterAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="AfterAuth" component={AfterAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
