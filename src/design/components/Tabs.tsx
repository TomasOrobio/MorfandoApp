/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favoritos from "../screens/user/Favoritos";
import Perfil from "../screens/user/Perfil";
import HomeScreen from "../screens/user/HomeScreen";
import { Text } from "react-native";

const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        style: { 
          borderTopColor:'red'
        },
        labelStyle:{
          fontSize: 15
        }
      }}
      screenOptions= { ({ route }) => ({
        tabBarIcon: ( color: any, focused: any, size: any ) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'Home';
              break;
            case 'Favoritos':
              iconName = 'Favoritos';
              break;
            case 'Perfil':
              iconName = 'Perfil';
              break;              
          }
          return <Text style={{ color }}> Icon </Text>;
        }
      })

      }
    >
      <Tab.Screen name=" " component={HomeScreen}  />
      <Tab.Screen name="  " component={Favoritos} />
      <Tab.Screen name="   " component={Perfil} />
  </Tab.Navigator>
  );
};

export default App;

