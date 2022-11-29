import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { style } from '../../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '.';
type RegisterScreenProps = StackScreenProps<RootStackParams, 'ShopItem'>;
const ShopItemScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	const { shop } = route.params;

	return (
		<View style={style.container}>
			<View style={{ flex: 0.5 }}>
				<Image style={styles.imagen} source={require('../../../../assets/images/deandennys.png')} />
			</View>
			<View style={{ flex: 1, paddingHorizontal: 20 }}>
				<View style={{ flexDirection: 'row', paddingVertical: 20 }}>
					<View style={{ flex: 1.5 }}>
						<Text style={styles.textNombreRestaurante}>{shop.name}</Text>
						<Text style={styles.textCalificacion}>
							Calificación
							<Text style={styles.textDireccion}> Dirección</Text>
						</Text>
						<Text style={styles.textDireccion}>Dirección</Text>
					</View>
					<TouchableOpacity>
						<View style={{ flex: 0.5 }}>
							<Image style={styles.imagen1} source={require('../../../../assets/images/map.png')} />
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.containerIcon}>
					<TouchableOpacity>
						<Image style={styles.imagenicon} source={require('../../../../assets/images/rateicon.png')} />
					</TouchableOpacity>

					<TouchableOpacity>
						<Image style={styles.imagenicon} source={require('../../../../assets/images/favicon.png')} />
					</TouchableOpacity>

					<TouchableOpacity>
						<Image style={styles.imagenicon} source={require('../../../../assets/images/shareicon.png')} />
					</TouchableOpacity>
				</View>

				<ScrollView style={{ flex: 1 }}>
					<TouchableOpacity>
						<View style={styles.itemList}>
							<View style={{ flex: 1 }}>
								<Image style={styles.imagenplato} source={require('../../../../assets/images/Resto.jpg')} />
							</View>

							<View style={{ flex: 1.5 }}>
								<Text style={styles.textComida}>Comida</Text>
								<View style={{ flex: 0.1, flexDirection: 'row' }}>
									<Text style={styles.textDescuento}>_%</Text>
									<Text style={styles.textPrecio}> Precio</Text>
								</View>
							</View>

							<View style={{ flex: 0.5 }}>
								<Image style={styles.imagentacveg} source={require('../../../../assets/images/LibreGluten.png')} />
							</View>

							<View style={{ flex: 0.5 }}>
								<Image style={styles.imagentacveg} source={require('../../../../assets/images/Vegano.png')} />
							</View>
						</View>
					</TouchableOpacity>

					<View style={styles.itemList}>
						<View style={{ flex: 1 }}>
							<Image style={styles.imagenplato} source={require('../../../../assets/images/Resto.jpg')} />
						</View>

						<View style={{ flex: 1.5 }}>
							<Text style={styles.textComida}>Comida</Text>
							<View style={{ flex: 0.1, flexDirection: 'row' }}>
								<Text style={styles.textDescuento}>_%</Text>
								<Text style={styles.textPrecio}> Precio</Text>
							</View>
						</View>

						<View style={{ flex: 0.5 }}>
							<Image style={styles.imagentacveg} source={require('../../../../assets/images/LibreGluten.png')} />
						</View>

						<View style={{ flex: 0.5 }}>
							<Image style={styles.imagentacveg} source={require('../../../../assets/images/Vegano.png')} />
						</View>
					</View>

					<View style={styles.itemList}>
						<View style={{ flex: 1 }}>
							<Image style={styles.imagenplato} source={require('../../../../assets/images/Resto.jpg')} />
						</View>

						<View style={{ flex: 1.5 }}>
							<Text style={styles.textComida}>Comida</Text>
							<View style={{ flex: 0.1, flexDirection: 'row' }}>
								<Text style={styles.textDescuento}>_%</Text>
								<Text style={styles.textPrecio}> Precio</Text>
							</View>
						</View>

						<View style={{ flex: 0.5 }}>
							<Image style={styles.imagentacveg} source={require('../../../../assets/images/LibreGluten.png')} />
						</View>

						<View style={{ flex: 0.5 }}>
							<Image style={styles.imagentacveg} source={require('../../../../assets/images/Vegano.png')} />
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	itemList: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	containerIcon: {
		flex: 0.3,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},

	buttonBack: {
		width: '15%',
		height: '50%',
		color: 'black',
		borderColor: 'orange',
		borderWidth: 2,
		borderRadius: 100,
		backgroundColor: 'orange'
	},
	textBack: {
		fontFamily: 'Poppins-Medium',
		color: 'black',
		textAlign: 'center'
	},
	imagenResto: {
		alignSelf: 'center',
		height: '100%',
		width: '100%'
	},
	imagentacveg: {
		height: 30,
		width: 30,
		top: 10
	},
	imagenplato: {
		alignSelf: 'center',
		height: 69,
		width: 73,
		borderRadius: 25
	},
	imagenicon: {
		alignSelf: 'center',
		height: 40,
		width: 40
	},
	imagen: {
		height: '100%',
		width: '100%'
	},
	textComida: {
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		color: 'black'
	},
	textDescuento: {
		fontFamily: 'Poppins-Regular',
		fontSize: 12,
		borderWidth: 1,
		height: '80%',
		borderColor: 'orange',
		borderRadius: 10,
		backgroundColor: 'orange',
		width: '20%',
		textAlign: 'center',
		color: 'white'
	},
	textPrecio: {
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		marginLeft: 10,
		color: 'orange'
	},
	textNombreRestaurante: {
		fontFamily: 'Poppins-Medium',
		fontSize: 24,
		color: 'black',
		left: 5
	},
	textEspecialidad: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: 'gray',
		left: 5
	},
	textCalificacion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: 'gray',
		left: 5
	},
	textDireccion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: 'gray',
		left: 5
	},
	imagen1: {
		position: 'relative',
		top: 10,
		right: 15
	},
	textIconos: {
		color: 'gray'
	}
});

export default ShopItemScreen;
