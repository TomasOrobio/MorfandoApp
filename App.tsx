/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import MenuItem from './src/design/screens/user/MenuItem';
import HomeScreen from './src/design/screens/user/HomeScreen';
import Perfil from './src/design/screens/user/Profile';
import Favoritos from "./src/design/screens/user/Favoritos";
import LoginPage from "./src/design/screens/user/LoginPage";
import { StackNavigation } from './src/design/components/StackNavigation';

const App = () => {
  return (

    <>
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>

    </>

  );
};

export default App;