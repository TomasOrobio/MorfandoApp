import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../provider/AuthProvider';

// Auth screens
import Onboarding from '../screens/onboarding';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ChangePassword from '../screens/auth/ChangePassword';

import Loading from '../screens/Loading';
import { ShopNavigation, UserNavigation } from './BottomTabNavigator';
import { RootStackParams } from '../screens/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme/appTheme';
import Back from '../../assets/images/Back';
import InformacionRestaurante from '../screens/shop/InformacionRestaurante';
import Horarios from '../screens/shop/Horarios';
import FotosRestaurante from '../screens/shop/FotosRestaurante';
import CrearMenu from '../screens/shop/CrearMenu';
import ShopItemScreen from '../screens/user/shop/ShopItem';

const AuthStack = createStackNavigator<RootStackParams>();

const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
				headerTransparent: true
			}}
		>
			<AuthStack.Screen name="Onboarding" component={Onboarding} />
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen
				name="Register"
				component={Register}
				options={({ navigation }) => ({
					headerShown: true,
					headerTitle: '',
					headerLeft: () => (
						<TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
							<Back fontSize={12} color="#000" />
						</TouchableOpacity>
					)
				})}
			/>
			<AuthStack.Screen
				name="ForgetPassword"
				component={ChangePassword}
				options={({ navigation }) => ({
					headerShown: true,
					headerTitle: '',
					headerLeft: () => (
						<TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
							<Back fontSize={12} color="#000" />
						</TouchableOpacity>
					)
				})}
			/>
		</AuthStack.Navigator>
	);
};

const MainStack = createStackNavigator();

const UserMain = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<MainStack.Screen name="Main" component={UserNavigation} />
		</MainStack.Navigator>
	);
};

const ShopMain = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<MainStack.Screen name="Main" component={ShopNavigation} />
			<MainStack.Screen name="addRestaurant" component={InformacionRestaurante} />
			<MainStack.Screen name="schedule" component={Horarios} />
			<MainStack.Screen name="uploadFile" component={FotosRestaurante} />
			<MainStack.Screen name="createMenu" component={CrearMenu} />
			<MainStack.Screen name="ShopItem" component={ShopItemScreen} />
		</MainStack.Navigator>
	);
};

export default () => {
	const { user } = useAuth();
	console.log(user);
	return (
		<NavigationContainer>
			{user === null ? (
				<Loading />
			) : !user ? (
				<Auth />
			) : typeof user === 'object' && user.type === 'user' ? (
				<UserMain />
			) : (
				<ShopMain />
			)}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	buttonBack: {
		padding: 10,
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		backgroundColor: COLORS.principal,
		marginLeft: 10
	}
});
