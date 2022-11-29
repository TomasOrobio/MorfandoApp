import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AuthContext, UserType } from '../../provider/AuthProvider';
import { fetchPost, setToken } from '../../services';
import { COLORS } from '../../theme/appTheme';
import { RootStackParams } from '../types';

type LoginScreenProps = StackScreenProps<RootStackParams>;
function LoginScreen({ route, navigation }: LoginScreenProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const { setUser } = useContext(AuthContext);

	async function login() {
		setLoading(true);
		setError('');
		const user = {
			email,
			password
		};
		try {
			const response: { success: boolean; data: { accessToken: string; refreshToken: string } } = await fetchPost(
				'auth/login',
				user
			);
			if (response) {
				if (response.success) {
					const data: UserType = {
						email: email,
						password: password,
						type: 'user',
						accessToken: response.data.accessToken,
						refreshToken: response.data.refreshToken
					};
					console.log(data);
					setUser(data);
					setToken(response.data.accessToken);
				} else {
					setError('Email o contraseña incorrectos');
				}
			} else {
				setError('Error al iniciar sesión');
			}
		} catch (error) {
			console.error(error);
			setError('Error al iniciar sesión');
		}
		setLoading(false);
	}

	return (
		<View style={styles.container}>
			<View style={{ flex: 0.7 }}>
				<Image style={styles.imagen} source={require('../../../assets/images/Login.png')} />
			</View>

			<View style={{ flex: 0.6, paddingHorizontal: 30 }}>
				<View>
					<Text style={styles.text}>Iniciar sesión </Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={COLORS.gris}
					value={email}
					onChangeText={setEmail}
				/>

				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					placeholderTextColor={COLORS.gris}
					value={password}
					onChangeText={setPassword}
				/>
				<TouchableOpacity
					style={styles.textPassword}
					onPress={() => {
						navigation.navigate('ForgetPassword');
					}}
				>
					<Text>¿Olvidaste tu contraseña?</Text>
				</TouchableOpacity>

				{Boolean(error) && (
					<View>
						<Text style={{ textAlign: 'center', marginVertical: 10, color: 'red' }}>{error}</Text>
					</View>
				)}
			</View>

			<View>
				<TouchableOpacity
					style={styles.buttonGuardar}
					onPress={() => {
						login();
					}}
				>
					<Text style={styles.textGuardar}>{loading ? 'Iniciando...' : 'Iniciar sesión'}</Text>
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
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.blanco,
		flex: 1
	},
	text: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: COLORS.negro
	},
	input: {
		width: '100%',
		heigh: '30%',
		alignSelf: 'center',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: COLORS.principal,
		backgroundColor: 'white',
		color: COLORS.negro,
		fontSize: 12,
		marginVertical: 12,
		padding: 10
	},
	imagen: {
		alignSelf: 'center',
		height: '80%',
		width: '80%',
		resizeMode: 'contain',
		top: '10%'
	},
	buttonGuardar: {
		paddingHorizontal: 20,
		paddingVertical: 10,
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
		textAlign: 'center'
	},
	textPassword: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		alignSelf: 'flex-end',
		color: COLORS.gris
	},
	textAccount1: {
		color: COLORS.negro
	},
	textAccount2: {
		color: 'blue'
	},
	buttonAccount: {
		alignSelf: 'center',
		marginVertical: 20
	}
});
