import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../types';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, style } from '../../theme/appTheme';
import { fetchPut } from '../../services';

type ChangePasswordScreenProps = StackScreenProps<RootStackParams>;
const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({ route, navigation }) => {
	const [email, setEmail] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const [success, setSuccess] = React.useState('');

	async function handleSubmit() {
		setLoading(true);
		setError('');
		setSuccess('');
		const user = {
			email
		};
		try {
			const response = await fetchPut('auth/resetpassword', user);
			if (response) {
				if (response.success) {
					setSuccess('Se ha enviado un correo a la dirección indicada');
				} else if (response.error) {
					setError(response.error);
				} else {
					setError('Error al enviar el correo');
				}
			} else {
				setError('Error al enviar el correo');
			}
		} catch (error) {
			console.error(error);
			setError('Error al enviar el correo');
		}
		setLoading(false);
	}
	return (
		<View style={style.container}>
			<View style={{ flex: 1.5 }}>
				<Image style={styles.imagen} source={require('../../../assets/images/imgCambiarContraseña.png')} />
			</View>

			<View style={{ flex: 0.5 }}>
				<Text style={styles.textTitle}>Cambiar Contraseña</Text>
				<Text style={styles.textSubtitle}>Te enviaremos un mail para restablercer la contraseña.</Text>
			</View>

			<View style={{ flex: 0.5 }}>
				<TextInput style={styles.input} placeholder="Email" value={email} placeholderTextColor={COLORS.gris} autoCapitalize = 'none' onChangeText={setEmail} />
			</View>

			<View style={{ flex: 0.5 }}>
				{error ? <Text style={styles.error}>{error}</Text> : null}
				{success ? <Text style={styles.success}>{success}</Text> : null}
			</View>

			<View style={{ flex: 0.5 }}>
				<TouchableOpacity style={styles.buttonGuardar} onPress={handleSubmit}>
					<Text style={styles.textGuardar}>{loading ? 'Enviando...' : 'Guardar'}</Text>
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
		backgroundColor: COLORS.blanco,
		flex: 1
	},
	textTitle: {
		fontFamily: 'Poppins-Bold',
		fontSize: 25,
		color: COLORS.negro,
		margin: 10,
		textAlign: 'center',
		height: '25%',
		width: '75%',
		alignSelf: 'center'
	},
	textSubtitle: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		color: COLORS.gris,
		margin: 20,
		textAlign: 'center',
		alignSelf: 'center',
		height: '35%',
		width: '75%'
	},

	input: {
		alignSelf: 'center',
		padding: 10,
		width: '90%',
		height: '40%',
		borderWidth: 2,
		borderColor: COLORS.principal,
		borderRadius: 10,
		fontSize: 16,
		color: COLORS.negro
	},
	imagen: {
		alignSelf: 'center',
        height: '100%',
        width: '80%',
        resizeMode: 'contain'
	},
	buttonBack: {
		width: '15%',
		height: '50%',
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
		width: '90%',
		height: '50%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: COLORS.principal
	},
	textGuardar: {
		fontFamily: 'Poppins-Medium',
		fontSize: 18,
		color: COLORS.blanco,
		textAlign: 'center',
		top: '25%'
	}
});

export default ChangePasswordScreen;
