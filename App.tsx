import React, {useEffect} from 'react';
import Auth from './src/components/Screens/Auth/Auth';
import AfterAuth from './src/components/Screens/AfterAuth/AfterAuth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="AfterAuth" component={AfterAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
