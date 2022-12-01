import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/appTheme';
import HomeScreen from '../screens/user/HomeScreen';
import FavoriteScreen from '../screens/user/FavoriteScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreen from '../screens/user/shop';
import MisRestaurantes from '../screens/shop/MisRestaurantes';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../provider/AuthProvider';

const Tab = createBottomTabNavigator();
export const UserNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: COLORS.principal,
				tabBarInactiveTintColor: COLORS.gris,
				tabBarStyle: {
					borderTopWidth: 0
				}
			}}
		>
			<Tab.Screen
				name="Home"
				component={ShopScreen}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ color }) => (
						<Image source={require('../../assets/images/home.png')} style={{ tintColor: color }} />
					)
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteScreen}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({ color }) => (
						<Image source={require('../../assets/images/favorites.png')} style={{ tintColor: color }} />
					)
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Perfil',
					tabBarIcon: ({ color }) => (
						<Image source={require('../../assets/images/profile.png')} style={{ tintColor: color }} />
					)
				}}
			/>
		</Tab.Navigator>
	);
};

export const ShopNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: COLORS.principal,
				tabBarInactiveTintColor: COLORS.gris,
				tabBarStyle: {
					borderTopWidth: 0
				}
			}}
		>
			<Tab.Screen
				name="Home"
				component={MisRestaurantes}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ color }) => (
						<Image source={require('../../assets/images/home.png')} style={{ tintColor: color }} />
					)
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Perfil',
					tabBarIcon: ({ color }) => (
						<Image source={require('../../assets/images/profile.png')} style={{ tintColor: color }} />
					)
				}}
			/>
		</Tab.Navigator>
	);
};
