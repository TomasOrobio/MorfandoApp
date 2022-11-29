import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ProgressBarAndroid,
	TouchableOpacity,
	Image,
	ScrollView,
	TextInput
} from 'react-native';
import { COLORS, style } from '../../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '.';

type RegisterScreenProps = StackScreenProps<RootStackParams>;
const ShopListScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	return (
		<View style={style.container}>
			<View style={{ flex: 0.2 }}>
				<View style={style.bannerHeaderapp}>
					<Text style={style.titleHeader}>Dirección</Text>
				</View>
			</View>

			<View style={{ flex: 0.2, flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<View>
						<TextInput style={stylesSheet.searchBar} placeholder={'¿Qué desea buscar?'} />
					</View>
				</View>

				<View style={{ flex: 0.5 }}>
					<TouchableOpacity onPress={() => navigation.navigate('Filter')} style={stylesSheet.buttonFiltrar} >
						<Text style={stylesSheet.textFiltrar}>Filtrar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 0.1 }}>
				<Text style={stylesSheet.textSubtitle}>Cerca de ti</Text>
			</View>

			<ScrollView style={{ flex: 1 }}>
				<TouchableOpacity onPress={() => navigation.navigate('ShopItem')}>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 0.5 }}>
							<Image style={stylesSheet.imagen} source={require('../../../../assets/images/restaurante-random.png')} />
						</View>

						<View style={{ flex: 1 }}>
							<Text style={stylesSheet.textNombreRestaurante}>Nombre restaurante</Text>
							<Text style={stylesSheet.textDireccion}>Dirección</Text>
							<Text style={stylesSheet.textCalificacion}>Iconos calificación</Text>
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const stylesSheet = StyleSheet.create({
	searchBar: {
		marginLeft: 5,
		fontSize: 20,
		height: '70%',
		width: '100%',
		backgroundColor: 'lightgray',
		borderRadius: 50,
		top: 20
	},

	imagen: {
		alignSelf: 'center',
		height: 100,
		width: 100,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 20,
		margin: 5
	},
	textTitle: {
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		color: COLORS.blanco,
		left: 15,
		top: '40%'
	},
	textSubtitle: {
		fontFamily: 'Poppins-Regular',
		fontSize: 18,
		color: COLORS.negro,
		left: '5%'
	},
	textNombreRestaurante: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: COLORS.negro,
		marginTop: '2%'
	},
	textDireccion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: COLORS.negro
	},
	buttonFiltrar: {
		width: '80%',
		height: '40%',
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 100,
		top: 25,
		alignSelf: 'center',
		backgroundColor: COLORS.principal
	},
	textFiltrar: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		fontSize: 18,
		top: '20%'
	},
	textCalificacion: {
		color: COLORS.gris
	}
});

export default ShopListScreen;
