import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { style } from '../../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '.';
import { fetchGet, fetchPost } from '../../../services';
import { useAuth } from '../../../provider/AuthProvider';
import { StackActions, useNavigation } from '@react-navigation/native';
type RegisterScreenProps = StackScreenProps<RootStackParams, 'ShopItem'>;
const ShopItemScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	const { shop } = route.params;
	const [isFav, setIsFav] = useState(false)
	const {user:{type}} = useAuth()

	const getFavorites = async() => {
		try {
			const getFavs = await fetchGet("account/favorites")
			const favs: any[] = getFavs.user.favorites
			if(favs.indexOf(shop.id) !== -1){
				setIsFav(true)
			}
		} catch (error) {
			
		}
	}
	const nav = useNavigation()
	const setFavorite = async() => {
		try {
			const getFavs = await fetchPost("account/favorites",{restaurant: shop.id }, {})
			setIsFav(!isFav);	
		} catch (error) {
			alert("Ha ocurrido un error")
		}
	}
	const [menu, setMenu] = useState([])
	const getDishes = async() => {
		try {
			const idRest = shop.id
		const getDishes = await fetchGet(`restaurant/${idRest}/menu`)
		console.log(getDishes.menu)
		setMenu(getDishes.menu)
		} catch (error) {
			alert("No ha posible obtener el menu")
		}
	}	

	useEffect(()=> {
		getFavorites()
		getDishes()
	}, [])

	return (
		<ScrollView style={style.container}>
			<View>
				<Image style={styles.imagen} source={{uri: shop.imageURL}} />
			</View>
			<View style={{ flex: 1, paddingHorizontal: 20 }}>
				<View style={{ flexDirection: 'row', paddingVertical: 20 }}>
					<View style={{ flex: 1.5 }}>
						<Text style={styles.textNombreRestaurante}>{shop.name}</Text>
						<Text style={styles.textCalificacion}>
							{shop.stars} estrellas
						</Text>
						<Text style={styles.textDireccion}>{shop.location.address}</Text>
					</View>
					<TouchableOpacity>
						<View>
							<Image style={styles.imagen1} source={require('../../../../assets/images/map.png')} />
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.containerIcon}>
					<TouchableOpacity>
						<Image style={styles.imagenicon} source={require('../../../../assets/images/rateicon.png')} />
					</TouchableOpacity>

					{type !== "shop" && <TouchableOpacity onPress={setFavorite}>
						<Image style={styles.imagenicon} source={isFav ? require('../../../../assets/images/corazon.png') : require('../../../../assets/images/favicon.png')} />
					</TouchableOpacity>
}
					<TouchableOpacity>
						<Image style={styles.imagenicon} source={require('../../../../assets/images/shareicon.png')} />
					</TouchableOpacity>
				</View>

				<FlatList 
					data={menu}
					scrollEnabled={false}
					keyExtractor={(_item :any,_index: any) => _index}
					renderItem={({item})=>(
						<TouchableOpacity onPress={()=> nav.dispatch(StackActions.push("MenuItem", {...item}))} style={styles.itemList}>
							<View>
								<Image style={styles.imagenplato} source={item.imageURL === "null" ? require('../../../../assets/images/Resto.jpg') : {uri:item.imageURL}} />
							</View>

							<View style={{ flex: 1.5, marginLeft: 10 }}>
								<Text style={styles.textComida}>{item.title}</Text>
								<View style={{ flex: 0.1, flexDirection: 'row' }}>
									<Text style={styles.textDescuento}>{item?.descuento}%</Text>
									<Text style={styles.textPrecio}>${item.price}</Text>
								</View>
							</View>

							{item.isCeliac && <View style={{ flex: 0.5 }}>
								<Image style={styles.imagentacveg} source={require('../../../../assets/images/LibreGluten.png')} />
							</View>
					}
						{item.isVeggie && 
							<View style={{ flex: 0.5 }}>
								<Image style={styles.imagentacveg} source={require('../../../../assets/images/Vegano.png')} />
							</View>
							}
						</TouchableOpacity>
					)}
				/>
			</View>
		</ScrollView>
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
		alignSelf:"center",
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
		width: 40,
	},
	imagen: {
		height: 200,
		width:"100%",
		resizeMode:"contain"
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
		right: 15
	},
	textIconos: {
		color: 'gray'
	}
});

export default ShopItemScreen;
