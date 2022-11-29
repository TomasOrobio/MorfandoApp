import React, { useContext, useEffect, useState } from 'react';
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
	const [loading, setLoading] = useState(false);
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
				{loading ? (
					<ProgressBarAndroid styleAttr="Horizontal" color={COLORS.principal} />
				) : error ? (
					<Text>{error}</Text>
				) : (
					shops.map((shop) => (
						<TouchableOpacity key={shop.id} onPress={() => navigation.navigate('ShopItem', { shop })}>
							<View style={{ flex: 1 }}>
								<Image style={stylesSheet.image} source={{ uri: shop.imageURL }} />
							</View>
							<View style={{ flex: 1 }}>
								<Text style={stylesSheet.textNombreRestaurante}>{shop.name}</Text>
								<Text style={stylesSheet.textDireccion}>{shop.location.address}</Text>
								<Text style={stylesSheet.textCalificacion}>{shop.stars}</Text>
							</View>
						</TouchableOpacity>
					))
				)}
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

	image: {
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
