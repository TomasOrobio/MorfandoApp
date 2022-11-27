import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Back from '../../../../assets/images/Back';
import { COLORS } from '../../../theme/appTheme';
import ShopItem from './ShopItem';
import ShopList from './ShopList';

export type RootStackParams = {
	ShopItem: undefined;
	ShopList: undefined;
};

type Props = StackScreenProps<RootStackParams>;

const NavStack = createStackNavigator<RootStackParams>();

const Navigator = () => {
	return (
		<NavStack.Navigator
			initialRouteName="ShopList"
			screenOptions={{
				headerShown: false
			}}
		>
			<NavStack.Screen name="ShopList" component={ShopList} />
			<NavStack.Screen
				name="ShopItem"
				component={ShopItem}
				options={({ navigation }: Props) => ({
					headerShown: true,
					headerTitle: '',
					headerLeft: () => (
						<TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
							<Back fontSize={12} color="#000" />
						</TouchableOpacity>
					)
				})}
			/>
		</NavStack.Navigator>
	);
};

export default Navigator;

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
