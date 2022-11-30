import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../types';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { fetchPost } from '../../services';

type RegisterScreenProps = StackScreenProps<RootStackParams>;
const RegisterScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const [success, setSuccess] = React.useState('');

	async function register() {
		setLoading(true);
		setError('');
		setSuccess('');
		const user = {
			email,
			password,
			firstName,
			lastName
		};
		try {
			const response = await fetchPost('auth/signup', user);
			console.log(response);
			if (response) {
				if (response.success) {
					setSuccess('Usuario registrado correctamente');
				} else if (response.error) {
					setError(response.error);
				} else {
					setError('Error al registrar usuario');
				}
			} else {
				setError('Error al registrar usuario');
			}
		} catch (error) {
			console.error(error);
			setError('Error al registrar usuario');
		}
		setLoading(false);
	}
	return (
		<View style={styles.container}>
			<View style={{ flex: 0.7 }}>
				<Image style={styles.imagen} source={require('../../../assets/images/imgRegistrarse.png')} />
			</View>

			<View style={{ flex: 0.2 }}>
				<Text style={styles.text}>Registrarse</Text>
			</View>

			<ScrollView style={{ flex: 3 }}>
				<TextInput
					style={styles.input}
					placeholder="Nombre"
					placeholderTextColor={'gray'}
					autoCapitalize="none"
					value={firstName}
					onChangeText={setFirstName}
				/>

				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={'gray'}
					autoCapitalize="none"
					value={email}
					onChangeText={setEmail}
				/>

				<TextInput
					style={styles.input}
					placeholder="Apellido"
					placeholderTextColor={'gray'}
					autoCapitalize="none"
					value={lastName}
					onChangeText={setLastName}
				/>

				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					placeholderTextColor={'gray'}
					autoCapitalize="none"
					value={password}
					onChangeText={setPassword}
				/>
				{error ? <Text style={styles.error}>{error}</Text> : null}
				{success ? <Text style={styles.success}>{success}</Text> : null}
			</ScrollView>

			<View style={{ flex: 0.2 }}>
				<TouchableOpacity style={styles.buttonGuardar} onPress={register}>
					<Text style={styles.textGuardar}>{loading ? 'Cargando...' : 'Crear Cuenta'}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	error: {
		color: 'red',
		fontSize: 20,
		textAlign: 'center'
	},
	success: {
		color: 'green',
		fontSize: 20,
		textAlign: 'center'
	},
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	text: {
		height: '100%',
		width: '40%',
		left: '5%',
		textAlignVertical: 'center',
		fontFamily: 'Poppins-Bold',
		fontSize: 25,
		color: 'black'
	},
	input: {
		width: '90%',
		heigh: '30%',
		alignSelf: 'center',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'orange',
		backgroundColor: 'white',
		color: 'black',
		fontSize: 12,
		margin: '2%',
		padding: 10
	},
	imagen: {
		alignSelf: 'center',
		height: '100%',
		width: '100%',
		resizeMode: 'contain'
	},
	buttonGuardar: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		color: 'black',
		borderColor: 'orange',
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: 'orange'
	},
	textGuardar: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: 'white',
		textAlign: 'center'
	}
});

export default RegisterScreen;
