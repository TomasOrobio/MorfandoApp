import React, { useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { COLORS, style } from '../../theme/appTheme';
import Edit from '../../../assets/images/Edit';
import { color } from 'react-native-reanimated';
import { useAuth } from '../../provider/AuthProvider';

const Perfil = () => {
	const {user: {user, lastName, email }, setUser} = useAuth();
	// const { setUser } = useContext(AuthContext);
	const handleLogout = () => {
		setUser(false);
	};
	const handleChangeProfile = () => {
		console.log('cambiar perfil');
	};

	return (
		<View style={styles.container}>
			<View>
				<View style={style.bannerHeaderapp}>
					<Text style={style.titleHeader}>Perfil</Text>
				</View>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 0.5 }}>
					<Image style={styles.imagen} source={require('../../../assets/images/Perfil.png')} />
				</View>

				<View style={{ flex: 1.5 }}>
					<Text style={styles.textHola}>Hola!</Text>
					<Text style={styles.textUserName}>{user}</Text>
				</View>
			</View>

			<View style={{ flex: 0.3 }}>
				<TouchableOpacity style={styles.buttonCambiarFoto}>
					<Text style={styles.textCambiarFoto}>Cambiar foto</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput style={styles.input} placeholder="Nombre" value={user} placeholderTextColor={COLORS.gris} />
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Edit fontSize={26} color="white" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput
						style={styles.input}
						placeholder="Apellido"
						placeholderTextColor={COLORS.gris}
						value={lastName}
					/>
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Edit fontSize={26} color="white" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput style={styles.input} placeholder="Email" value={email} placeholderTextColor={COLORS.gris} />
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Edit fontSize={26} color="white" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 1 }}>
				<TouchableOpacity style={styles.buttonCerrarSesion} onPress={handleLogout}>
					<Text style={styles.textCerrarSesion}>Cerrar Sesión</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonDesactivarCuenta}>
					<Text style={styles.textDesactivarCuenta}>Desactivar cuenta</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.blanco,
		flex: 1
	},
	textTitle: {
		fontFamily: 'Poppins-Regular',
		fontSize: 30,
		color: COLORS.blanco,
		alignSelf: 'center',
		top: '30%'
	},
	textHola: {
		fontFamily: 'Poppins-Bold',
		fontSize: 30,
		color: COLORS.negro,
		alignSelf: 'flex-start'
	},
	textUserName: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 20,
		color: COLORS.negro,
		alignSelf: 'flex-start'
	},
	imagen: {
		alignSelf: 'center',
		height: 68,
		width: 66,
		borderWidth: 2,
		borderColor: COLORS.negro,
		borderRadius: 20,
		marginTop: 2
	},
	buttonCambiarFoto: {
		width: '20%',
		height: '30%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		backgroundColor: COLORS.principal,
		left: 20
	},
	textCambiarFoto: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		top: '25%'
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
		padding: 10
	},
	buttonCerrarSesion: {
		width: '50%',
		height: '15%',
		borderRadius: 100,
		backgroundColor: '#FFC3C3',
		alignSelf: 'center',
		marginTop:40,
		justifyContent:"center"
	},
	textCerrarSesion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: 'red',
		alignSelf: 'center',
		
	},
	buttonDesactivarCuenta: {
		alignSelf: 'center',
		marginTop:20
	},
	textDesactivarCuenta: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 16,
		color: 'red',
		textDecorationLine: 'underline'
	},
	buttonEditar: {
		top: 7
	},
	textEditar: {}
});

export default Perfil;
