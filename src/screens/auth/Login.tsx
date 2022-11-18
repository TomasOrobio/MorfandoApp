import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../provider/AuthProvider';
import { COLORS } from '../../theme/appTheme';
import { RootStackParams } from '../types';

type LoginScreenProps = StackScreenProps<RootStackParams, 'Login'>;
const LoginScreen: React.FC<LoginScreenProps> = ({ route, navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const { setUser } = useContext(AuthContext);
	async function login() {
		setLoading(true);
		// try {
		//  await signInWithEmailAndPassword(auth, email, password);
		// } catch (error) {
		//   // Handle Errors here.
		//   var errorCode = error.code;
		//   var errorMessage = error.message;
		//   alert(errorMessage);
		// }

		setTimeout(() => {
			setLoading(false);
			setUser({ email: email, password: password, type: 'user' });
		}, 1000);
	}

	return (
		<View style={styles.container}>
			<View style={{ flex: 0.1 }}>
				<TouchableOpacity style={styles.buttonBack}>
					<Text style={styles.textBack}>BACK</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.7 }}>
				<Image style={styles.imagen} source={require('../../../assets/images/Login.png')} />
			</View>

			<View style={{ flex: 0.1 }}>
				<Text style={styles.text}>Iniciar sesión </Text>
			</View>

			<View style={{ flex: 0.6 }}>
				<TextInput style={styles.input} placeholder="Email" placeholderTextColor={COLORS.gris} />

				<TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={COLORS.gris} />
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('ForgetPassword');
					}}
				>
					<Text style={styles.textPassword}>¿Olvidaste tu contraseña?</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.2 }}>
				<TouchableOpacity
					style={styles.buttonGuardar}
					onPress={() => {
						login();
					}}
				>
					<Text style={styles.textGuardar}>{loading ? 'Iniciando...' : 'Iniciar sesión'}</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 0.5 }}>
				<TouchableOpacity style={styles.buttonGoogle}>
					<Text style={styles.textGoogle}>Iniciar sesión con Google</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonApple}>
					<Text style={styles.textApple}>Iniciar sesión con Apple</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonAccount}
					onPress={() => {
						navigation.navigate('Register');
					}}
				>
					<Text style={styles.textAccount1}>
						¿No tienes una cuenta?
						<Text style={styles.textAccount2}> Registrate</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.blanco,
		flex: 1
	},
	text: {
		height: '100%',
		width: '30%',
		left: '5%',
		textAlignVertical: 'center',
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: COLORS.negro
	},
	input: {
		width: '90%',
		heigh: '30%',
		alignSelf: 'center',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: COLORS.principal,
		backgroundColor: 'white',
		color: COLORS.negro,
		fontSize: 12,
		margin: 12,
		padding: 10
	},
	imagen: {
		alignSelf: 'center',
		height: '80%',
		width: '100%',
		resizeMode: 'contain',
		top: '10%'
	},
	buttonBack: {
		width: '15%',
		height: '100%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		backgroundColor: COLORS.principal
	},
	textBack: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.negro,
		textAlign: 'center'
	},
	buttonGuardar: {
		width: '40%',
		height: '70%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: COLORS.principal
	},
	textGuardar: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		top: '25%'
	},
	textPassword: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		alignSelf: 'flex-end',
		right: '5%',
		color: COLORS.gris
	},
	textAccount1: {
		color: COLORS.negro
	},
	textAccount2: {
		color: 'blue'
	},
	buttonAccount: {
		alignSelf: 'center'
	},
	buttonGoogle: {
		height: '30%',
		width: '90%',
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: 'white',
		borderColor: '#D7D7D7',
		margin: 5
	},
	buttonApple: {
		height: '30%',
		width: '90%',
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: 'black',
		borderColor: 'black',
		margin: 5
	},
	textGoogle: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.negro,
		textAlign: 'center',
		top: 12
	},
	textApple: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		top: 12
	}
});
