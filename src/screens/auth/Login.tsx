import { CompositeScreenProps, useFocusEffect } from '@react-navigation/native';
import {
	GoogleSignin,
	statusCodes,
	GoogleSigninButton,
	ConfigureParams
} from '@react-native-google-signin/google-signin';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useAuth, UserType } from '../../provider/AuthProvider';
import { fetchPost, setToken } from '../../services';
import { COLORS } from '../../theme/appTheme';
import { RootStackParams } from '../types';

type LoginScreenProps = StackScreenProps<RootStackParams>;
function LoginScreen({ route, navigation }: LoginScreenProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const { setUser } = useAuth();

	useFocusEffect(useCallback(() => {
		GoogleSignin.configure({
			androidClientId: '669579208186-956fjo61ivp0h8qdvgf2tqo9g7glpv6o.apps.googleusercontent.com'
		});
	}, []));

	async function LoginWithGoogle(data:any){
		setLoading(true);
		setError('');
		const user = data
		try {
			const response: { success: boolean; data: { accessToken: string; refreshToken: string, firstName: string, lastName: string } } = await fetchPost(
				'auth/login/google',
				user
			);
			console.log(response)
			if (response) {
				if (response.success) {
					const data: UserType = {
						email: email,
						password: password,
						type: 'user',
						user: response.data.firstName,
						lastName: response.data.lastName,
						accessToken: response.data.accessToken,
						refreshToken: response.data.refreshToken,
					};
					console.log(response);
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

	async function login() {
		setLoading(true);
		setError('');
		const user = {
			email,
			password
		};
		try {
			const response: { success: boolean; data: { accessToken: string; refreshToken: string, firstName: string, lastName: string } } = await fetchPost(
				'auth/login',
				user
			);
			if (response) {
				if (response.success) {
					const data: UserType = {
						email: email,
						password: password,
						type: 'shop',
						user: response.data.firstName,
						lastName: response.data.lastName,
						accessToken: response.data.accessToken,
						refreshToken: response.data.refreshToken,
					};
					console.log(response);
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

	const signIn = async () => {
		GoogleSignin.hasPlayServices()
			.then((hasPlayService) => {
				if (hasPlayService) {
					GoogleSignin.signIn()
						.then(({user}) => {
							const userData = JSON.stringify(user)
							LoginWithGoogle(userData);
						})
						.catch((e) => {
							console.log('ERROR IS: ' + JSON.stringify(e));
						});
				}
			})
			.catch((e) => {
				console.log('ERROR IS: ' + JSON.stringify(e));
			});
	};

	return (
		<ScrollView style={{flex:1, backgroundColor:"white"}}>
		<View style={styles.container}>
			<View>
				<Image style={styles.imagen} source={require('../../../assets/images/Login.png')} />
			</View>

			<View style={{paddingHorizontal: 30 }}>
				<View>
					<Text style={styles.text}>Iniciar sesión </Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={COLORS.gris}
					autoCapitalize = 'none'
					value={email}
					onChangeText={setEmail}
				/>

				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					placeholderTextColor={COLORS.gris}
					autoCapitalize = 'none'
					value={password}
					onChangeText={setPassword}
				/>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('ForgetPassword');
					}}
				>
					<Text style={styles.textPassword}>¿Olvidaste tu contraseña?</Text>
				</TouchableOpacity>

				{Boolean(error) && (
					<View>
						<Text style={{ textAlign: 'center', marginVertical: 10, color: 'red' }}>{error}</Text>
					</View>
				)}
			</View>

			<View style={{ paddingHorizontal: 30 }}>
				<TouchableOpacity
					style={styles.buttonGuardar}
					onPress={() => {
						login();
					}}
				>
					<Text style={styles.textGuardar}>{loading ? 'Iniciando...' : 'Iniciar sesión'}</Text>
				</TouchableOpacity>

				<GoogleSigninButton
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Light}
					style={{ width: '100%', height: 38, borderRadius: 50, marginVertical: 15, }}
					onPress={signIn}
				/>

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
		</ScrollView>
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
		resizeMode: 'contain',
		marginTop:10
	},
	buttonGuardar: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		marginTop:10,
		backgroundColor: COLORS.principal,
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
	}
});
