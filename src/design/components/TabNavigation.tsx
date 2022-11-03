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

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Register}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront-outline" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront-outline" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Register}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront-outline" color={'black'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
