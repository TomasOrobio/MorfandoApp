import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { COLORS } from '../../theme/appTheme';
import { FC_RN } from '../../navigation/Navigation.type';

const FotosRestaurante: FC_RN<{ createMenu: undefined }> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 0.2 }}>
				<TouchableOpacity style={styles.buttonBack}>
					<Text style={styles.textBack}>BACK</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.1 }}>
				<Text style={styles.text}>Subir Fotos</Text>
			</View>

			<View style={{ flex: 1 }}>
				<Image style={styles.imagen} source={require('../../../assets/images/restaurante-random.png')} />
			</View>

			<View style={{ flex: 0.2 }}>
				<TouchableOpacity style={styles.buttonSeleccionarFoto}>
					<Text style={styles.textSeleccionarFoto}>Seleccionar foto</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.2 }}>
				<Text style={styles.text}>Rango de Precio</Text>
			</View>

			<View>
				<Text>top bar</Text>
				<Text>$ $$ $$$ $$$$</Text>
			</View>

			<View style={{ flex: 0.2 }}>
				<ProgressBar
					style={styles.barraProgreso}
					styleAttr="Horizontal"
					indeterminate={false}
					progress={0.5}
					color={COLORS.principal}
				/>
			</View>

			<View style={{ flex: 0.4 }}>
				<TouchableOpacity style={styles.buttonGuardar} onPress={() => navigation?.navigate('createMenu')}>
					<Text style={styles.textGuardar}>Guardar</Text>
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
	imagen: {
		alignSelf: 'center',
		height: '95%',
		width: '90%',
		resizeMode: 'contain',
		borderRadius: 30,
		borderWidth: 1,
		borderColor: COLORS.negro,
		top: '2%'
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
	buttonSeleccionarFoto: {
		width: '50%',
		height: '100%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: COLORS.principal
	},
	textSeleccionarFoto: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: COLORS.blanco,
		textAlign: 'center',
		top: '25%'
	},
	text: {
		fontSize: 20,
		fontFamily: 'Poppins-Regular',
		color: COLORS.negro,
		width: '100%',
		height: '100%',
		left: '5%'
	},
	buttonGuardar: {
		width: '40%',
		height: '50%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		top: 20,
		alignSelf: 'center',
		backgroundColor: COLORS.principal
	},
	textGuardar: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		top: '25%'
	},
	barraProgreso: {
		flex: 1,
		alignSelf: 'center',
		width: '90%',
	}
});

export default FotosRestaurante;
