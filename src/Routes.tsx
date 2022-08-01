import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screen/Home';
import Introduction from './screen/Secondary';

const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default Routes;
