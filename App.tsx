/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from "react"; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import Tabs from "./src/design/components/Tabs";
import MenuItem from './src/design/screens/user/MenuItem';
import HomeScreen from './src/design/screens/user/HomeScreen';
import Perfil from './src/design/screens/user/Perfil';
import Favoritos from "./src/design/screens/user/Favoritos";
import LoginPage from "./src/design/screens/user/LoginPage";

const App = () => {
  return (
    // <NavigationContainer>
    //   <Text> a  </Text>
    //   {/* <Tabs/> */}
    // </NavigationContainer>
    // <HomeScreen/>
    // <Perfil/>
    // <MenuItem/>
    <Favoritos/>
    // <LoginPage/>

  );
};

export default App;