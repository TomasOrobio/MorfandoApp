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
import { AuthContext } from '../../provider/AuthProvider';
import { COLORS,style } from '../../theme/appTheme';

const Perfil = () => {
	const { setUser } = useContext(AuthContext);
	const handleLogout = () => {
		setUser(false);
	};
	return (
		<View style={styles.container}>
			<View style = {{flex: .5}}>
                <View style={style.bannerHeaderapp}>
                    <Text style={style.titleHeader}>Perfil</Text>
                </View>
            </View>

			<View style={{ flex: 0.4, flexDirection: 'row' }}>
				<View style={{ flex: 0.5 }}>
					<Image style={styles.imagen} source={require('../../../assets/images/Perfil.png')} />
				</View>

				<View style={{ flex: 1.5 }}>
					<Text style={styles.textHola}>Hola!</Text>
					<Text style={styles.textUserName}>nombre de usuario</Text>
				</View>
			</View>

			<View style={{ flex: 0.3 }}>
				<TouchableOpacity style={styles.buttonCambiarFoto}>
					<Text style={styles.textCambiarFoto}>Cambiar foto</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput style={styles.input} placeholder="Nombre" placeholderTextColor={COLORS.gris} />
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Text style={styles.textEditar}>Editar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput
						style={styles.input}
						placeholder="Teléfono"
						placeholderTextColor={COLORS.gris}
						keyboardType="numeric"
					/>
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Text style={styles.textEditar}>Editar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 0.3, flexDirection: 'row' }}>
				<View style={{ flex: 1.5 }}>
					<TextInput style={styles.input} placeholder="Email" placeholderTextColor={COLORS.gris} />
				</View>

				<View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Text style={styles.textEditar}>Editar</Text>
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
		alignSelf: 'flex-start',
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
		width: '30%',
		height: '65%',
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
		height: '20%',
		borderRadius: 100,
		backgroundColor: '#FFC3C3',
		alignSelf: 'center',
		top: 100
	},
	textCerrarSesion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: 'red',
		alignSelf: 'center',
		top: 14
	},
	buttonDesactivarCuenta: {
		alignSelf: 'center',
		top: 110
	},
	textDesactivarCuenta: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 16,
		color: 'red',
		textDecorationLine: 'underline'
	},
	buttonEditar: {},
	textEditar: {
		color: COLORS.gris
	}
});

export default Perfil;
