import React, { useContext, useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ProgressBarAndroid,
	TouchableOpacity,
	Image,
	ScrollView,
	TextInput,
	ProgressBarAndroidComponent
} from 'react-native';
import { COLORS, style } from '../../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '.';
import { fetchGet } from '../../../services';

export interface Shop {
	location: {
		coordinates: number[];
		address: string;
	};
	operatingHours: {
		mon: {
			open: string;
			close: string;
		};
	};
	name: string;
	description: string;
	stars: number;
	isClosed: boolean;
	dishesTypes: string[];
	pricesRange: string[];
	ownerID: string;
	imageURL: string;
	mediumImageURL: string;
	thumbnailImageURL: string;
	id: string;
}

type RegisterScreenProps = StackScreenProps<RootStackParams>;
const ShopListScreen: React.FC<RegisterScreenProps> = ({ route, navigation }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [shops, setShops] = useState<Shop[]>([]);

	async function handleGetShops() {
		setLoading(true);
		setError('');
		try {
			const response: { restaurants: Shop[] } = await fetchGet('restaurant');
			if (response && response.restaurants) {
				if (response.restaurants.length > 0) {
					setShops(response.restaurants);
				} else {
					setError('No hay restaurantes disponibles');
				}
			} else {
				setError('Error al obtener restaurantes');
			}
		} catch (error) {
			console.error(error);
			setError('Error al obtener restaurantes');
		}
		setLoading(false);
	}

	useEffect(() => {
		handleGetShops();
	}, []);

	const [filter, setFilter] = useState("");

	return (
		<View style={style.container}>
			<View>
				<View style={style.bannerHeaderapp}>
					<Text style={style.titleHeader}>Restaurantes cercanos</Text>
				</View>
			</View>

			<View style={{ flexDirection: 'row', alignItems:"center" }}>
				<View style={{flex:7}}>
						<TextInput value={filter} onChange={(e)=>setFilter(e.nativeEvent.text)} style={stylesSheet.searchBar} placeholder={'¿Qué desea buscar?'} />
				</View>
				<View style={{flex:3}}>
					<TouchableOpacity onPress={()=>navigation.navigate("Filters")} style={stylesSheet.buttonFiltrar}>
						<Text style={stylesSheet.textFiltrar}>Filtrar</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<Text style={stylesSheet.textSubtitle}>Cerca de ti</Text>
			</View>
			{loading ? (
				<Text>Cargando...</Text>
			) : error ? (
				<Text>{error}</Text>
			) : (
				<ScrollView >
					{shops.filter((item)=>item.name.toLowerCase().includes(filter.toLowerCase())).map((shop) => (
						<TouchableOpacity key={shop.id} onPress={() => navigation.navigate('ShopItem', { shop })}>
							<View style = {{flex: 1, flexDirection: 'row'}}>
								<View style={{alignSelf:"center"}}>
									<Image style={stylesSheet.image} source={{ uri: shop.imageURL }} />
								</View>
								<View style={{alignSelf:"center"}}>
									<Text style={stylesSheet.textNombreRestaurante}>{shop.name}</Text>
									<Text style={stylesSheet.textDireccion}>{shop.location.address}</Text>
									<View style={{flexDirection:"row"}}>
										<Image style={{height:20, width:20, resizeMode:"contain"}} source={require("../../../../assets/images/estrella.png")}/>
										<Text style={stylesSheet.textCalificacion}>{shop.stars}</Text>
									</View>
								</View>
							</View>	
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</View>
	);
};

const stylesSheet = StyleSheet.create({
	searchBar: {
		marginLeft: 5,
		fontSize: 20,
		width: '100%',
		backgroundColor: 'lightgray',
		borderRadius: 50,
		paddingHorizontal:10
	},

	image: {
		alignSelf: 'center',
		height: 80,
		width: 80,
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
		color: COLORS.negro,
		borderColor: COLORS.principal,
		borderWidth: 2,
		borderRadius: 60,
		alignSelf: 'center',
		backgroundColor: COLORS.principal,
		justifyContent:"center",
	},
	textFiltrar: {
		fontFamily: 'Poppins-Medium',
		color: COLORS.blanco,
		textAlign: 'center',
		fontSize: 18,
	},
	textCalificacion: {
		color: COLORS.gris,
		alignSelf:"center",
		marginLeft:5
	}
});

export default ShopListScreen;
