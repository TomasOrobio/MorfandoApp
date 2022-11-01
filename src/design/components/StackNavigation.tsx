import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Favoritos from '../screens/user/Favoritos';
import Profile from '../screens/user/Profile';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation:0,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="Home" component={Favoritos} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}