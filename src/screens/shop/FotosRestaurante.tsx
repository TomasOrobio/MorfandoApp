import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { COLORS } from '../../theme/appTheme';
import { FC_RN } from '../../navigation/Navigation.type';
import {launchImageLibrary} from 'react-native-image-picker';
import { StackActions, useNavigation } from '@react-navigation/native';
import { fetchPost } from '../../services';

const FotosRestaurante: FC_RN<{ createMenu: undefined }> = ({ navigation, route }) => {
	const [image, setImage] = useState<any>(null)
	const [range, setRange] = useState(0)
	const seleccionarFoto = async() => { 
		const result = await launchImageLibrary({mediaType:"photo"});
		if(result && result.assets){
			try {
				var bodyFormData = new FormData();
				bodyFormData.append('image', {
					uri: result.assets[0].uri, name: 'photo.png', filename: 'photo.png', type: 'image/png',
				  });
				bodyFormData.append("type","restaurant")
				const response = await fetchPost("images",bodyFormData,{
					'Content-Type': 'multipart/form-data',
				})	
				if(response){
					setImage(response.name)
				}
			} catch (error) {
				alert("Error al subir la imagen")
			}
		}
	}
	const nav = useNavigation();
	const goToNextScreeen = () => {
		if(image && range !==0){
			const data = {
				...route?.params,
				image,
				rangeLevel: range
			}
			nav.dispatch(StackActions.push("createMenu", data))
		}else{
			alert("No has completado todos los campos solicitados!")
		}
		// () => navigation?.navigate('createMenu')
	}

	return (
		<View style={styles.container}>
			
			<View style={{ flex: 0.1 }}>
				<Text style={styles.text}>Subir Fotos</Text>
			</View>

			<View style={{ flex: 1 }}>
				<Image style={styles.imagen} source={image ? {uri: "https://morfando.s3.amazonaws.com/large/"+image} : require('../../../assets/images/restaurante-random.png')} />
			</View>

			<View style={{ flex: 0.2 }}>
				<TouchableOpacity style={styles.buttonSeleccionarFoto} onPress={seleccionarFoto}>
					<Text style={styles.textSeleccionarFoto}>Seleccionar foto</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 0.2 }}>
				<Text style={styles.text}>Rango de Precio</Text>
			</View>

			<View style={styles.rangoPrecio}>
				<View style={{flexDirection:"row"}}>
				<TouchableOpacity onPress={() => setRange(1)} style={{backgroundColor:range === 1 ? COLORS.principal : COLORS.gris, paddingHorizontal:10, paddingVertical:5, borderWidth: 1, borderColor: "black"}}>
					<Text>$</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setRange(2)} style={{backgroundColor:range === 2 ? COLORS.principal : COLORS.gris, paddingHorizontal:10, marginLeft:5, paddingVertical:5, borderWidth: 1, borderColor: "black"}}>
					<Text>$$</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setRange(3)} style={{backgroundColor:range === 3 ? COLORS.principal : COLORS.gris, paddingHorizontal:10, marginLeft:5, paddingVertical:5, borderWidth: 1, borderColor: "black"}}>
					<Text>$$$</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setRange(4)} style={{backgroundColor:range === 4 ? COLORS.principal : COLORS.gris, paddingHorizontal:10, marginLeft:5, paddingVertical:5, borderWidth: 1, borderColor: "black"}}>
					<Text>$$$$</Text>
				</TouchableOpacity>
				</View>
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
				<TouchableOpacity style={styles.buttonGuardar} onPress={goToNextScreeen}>
					<Text style={styles.textGuardar}>Siguiente</Text>
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
		height: '80%',
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
		top: '25%',
		fontSize: 20
	},
	text: {
		fontSize: 20,
		fontFamily: 'Poppins-Regular',
		color: COLORS.negro,
		width: '100%',
		height: '100%',
		left: '5%',
		marginTop: 2
	},
	buttonGuardar: {
		width: '40%',
		height: '40%',
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
		top: '25%',
		fontSize: 20
	},
	rangoPrecio: {
		alignSelf: 'center',

	},
	barraProgreso: {
		flex: 1,
		alignSelf: 'center',
		width: '90%',
	}
});

export default FotosRestaurante;
