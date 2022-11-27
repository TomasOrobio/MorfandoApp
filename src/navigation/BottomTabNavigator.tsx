import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/appTheme';
import HomeScreen from '../screens/user/HomeScreen';
import FavoriteScreen from '../screens/user/FavoriteScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreen from '../screens/user/shop';
import FavoritosConItems from '../screens/user/FavoritosConItems';

const Tab = createBottomTabNavigator();

export const UserNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Inicio"
			screenOptions={{
				headerShown: false,
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
					tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoritosConItems}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({ color, size }) => <Icon name="star" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Perfil',
					tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	);
};

export const ShopNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Inicio"
			screenOptions={{
				headerShown: false,
				// tabBarShowLabel: false,
				tabBarActiveTintColor: COLORS.principal,
				tabBarInactiveTintColor: COLORS.gris,
				tabBarStyle: {
					borderTopWidth: 0
				}
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteScreen}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({ color, size }) => <Icon name="star" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Perfil',
					tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	);
};
