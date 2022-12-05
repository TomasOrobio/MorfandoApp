/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	ProgressBarAndroidComponent
} from 'react-native';
import { fetchGet } from '../../services';
import { COLORS, style } from '../../theme/appTheme';
import { Shop } from './shop/ShopList';

const Favoritos = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [favorite, setFavorite] = useState<Shop[]>([]);
	const nav = useNavigation()
	const handleGetFavorite = async () => {
		setLoading(true);
		setError('');
		try {
			const response: any = await fetchGet('account/favorites');
			if (response) {
				if (response.length > 0) {
					setFavorite(response);
				} else {
					setError('No hay favoritos disponibles');
				}
			} else {
				setError('Error al obtener favoritos');
			}
		} catch (error) {
			setError('Error al obtener favoritos');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleGetFavorite();
	}, []);

	return (
		<View style={style.container}>
			<View style={{ flex: 0.2 }}>
				<View style={style.bannerHeaderapp}>
					<Text style={style.titleHeader}>Favoritos</Text>
				</View>
			</View>

			{loading ? (
				<Text>Cargando...</Text>
			) : error ? (
				<Text>{error}</Text>
			) : (
				<ScrollView  style={{ flex: 1 }}>
					{favorite.map((shop) => (
						<TouchableOpacity onPress={() => nav.dispatch(StackActions.push('ShopItem', { shop }))}>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={{ flex: 0.5 }}>
									<Image style={styles.imagen} source={{uri:shop.imageURL}} />
								</View>

								<View style={{ flex: 1 }}>
									<View>
										<Text style={styles.textNombreRestaurante}>{shop.name}</Text>
										<Text style={styles.textDireccion}>{shop.location.address}</Text>
										<View style={{flexDirection:"row", alignItems:"center"}}>
											<Image style={{width:20,height:20,resizeMode:"contain"}} source={require("../../../assets/images/estrella.png")}/>
											<Text style={{marginLeft:5}}>{shop.stars}</Text>
										</View>
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

const styles = StyleSheet.create({
	textTitle: {
		fontFamily: 'Poppins-Regular',
		fontSize: 30,
		color: COLORS.blanco,
		alignSelf: 'center',
		top: '40%'
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
	textNombreRestaurante: {
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		color: COLORS.negro,
		marginTop: '2%'
	},
	textDireccion: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: COLORS.negro
	},
	textIconos: {
		color: COLORS.gris
	}
});

export default Favoritos;
