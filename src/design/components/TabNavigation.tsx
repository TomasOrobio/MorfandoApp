/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favoritos from '../screens/user/Favoritos';
import Profile from '../screens/user/Profile';
import HomeScreen from '../screens/user/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Filtros from '../screens/user/Filtros';
import Platos from '../screens/user/Platos';
import Register from '../screens/user/Register';
import ChangePassword from '../screens/user/ChangePassword';
import InformacionRestaurante from '../screens/restaurant/InformacionRestaurante';
import Horarios from '../screens/restaurant/Horarios';
import FotosRestaurante from '../screens/restaurant/FotosRestaurante';
import CrearMenu from '../screens/restaurant/CrearMenu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuItem from '../screens/user/MenuItem';
import MisRestaurantes from '../screens/restaurant/MisRestaurantes';
import Login from '../screens/user/Login';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Inicio"
        component={Login} //Filtros ChangePassword
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={MenuItem} //MenuItem Platos Register
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={FotosRestaurante} //CrearMenu Horarios FotosRestaurante InformacionRestaurante MisRestaurantes
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
