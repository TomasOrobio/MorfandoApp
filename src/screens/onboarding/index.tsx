import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../../theme/appTheme';
import { RootStackParams } from '../types';

type LoginScreenProps = StackScreenProps<RootStackParams>;
export default function ({ navigation }: LoginScreenProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function login() {
		setLoading(true);
		// await firebase
		// 	.auth()
		// 	.signInWithEmailAndPassword(email, password)
		// 	.catch(function (error: any) {
		// 		// Handle Errors here.
		// 		var errorCode = error.code;
		// 		var errorMessage = error.message;
		// 		// ...
		// 		setLoading(false);
		// 		alert(errorMessage);
		// 	});
	}

	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Login');
			}}
			style={styles.container}
		>
			<View>
				<Image style={styles.imagen} source={require('../../../assets/images/FotoInicio.png')} />
			</View>

			<View>
				<Text style={styles.text}>Morfando Inc</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.principal,
		flex: 1
	},
	imagen: {
		alignSelf: 'center',
		height: 186,
		width: 182,
		borderWidth: 2,
		backgroundColor: 'white',
		borderRadius: 100,
		marginTop: '50%'
	},
	text: {
		fontFamily: 'Poppins-Regular',
		fontSize: 48,
		color: COLORS.negro,
		alignSelf: 'center'
	}
});
