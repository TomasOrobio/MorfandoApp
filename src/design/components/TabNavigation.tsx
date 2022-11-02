import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favoritos from '../screens/user/Favoritos';
import Profile from '../screens/user/Profile';
import HomeScreen from '../screens/user/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Favoritos}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'black'} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Favoritos} />
      <Tab.Screen name="hola" component={Profile} />
    </Tab.Navigator>
  );
};
