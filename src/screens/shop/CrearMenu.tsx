import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Switch, ScrollView, Image, Modal } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import {COLORS} from '../../theme/appTheme';
import ItemPlato from "./ItemPlato";
import { ButtonWithTitle } from "../../components/ButtonWithTittle";
import {launchImageLibrary} from 'react-native-image-picker';
import { fetchGet, fetchPost } from "../../services";
import { useAuth } from "../../provider/AuthProvider";
import jwtDecode from "jwt-decode";
import { StackActions, useNavigation } from "@react-navigation/native";

const CrearMenu = (props: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selected, setSelected] = React.useState("");
    const [titulo, setTitulo] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [precio, setPrecio] =  useState("")
    const [descuento, setDescuento] = useState("")
    const [ingredientes, setIngredientes] = useState("")
    const [imagen, setImage] = useState("Agregar foto")
    const [isVegano, setIsVegano] = useState(false)
    const [isLibreDeGluten, setIsLibreDeGluten] = useState(false)
    const [platos, setPlatos] = useState<any>([])
    const {user, setUser} = useAuth();

    const openModal = () => {
        setTitulo("")
        setPrecio("")
        setDescuento("")
        setIngredientes("")
        setImage("Agregar foto")
        setIsVegano(false)
        setIsLibreDeGluten(false)
        setShowModal(true)
    }

    const agregarPlato = () => {
        if(precio.length >0 && descuento.length > 0 && ingredientes.length>0 && imagen !== "Agregar foto" && titulo.length>0){
            const data = {
                precio,
                descuento,
                ingredientes,
                isVegano,
                isLibreDeGluten,
                imagen: imagen === "Agregar foto" ? "" : imagen,
                titulo,
            }
            let aux = platos
            aux = aux.concat([data])
            setPlatos(aux)
            setShowModal(false)
        }else{
            alert("Debes completar todos los campos")
        }
    }

    const agregarFoto = async() => {
        const result = await launchImageLibrary({mediaType:"photo"});
		if(result && result.assets){
			try {
				var bodyFormData = new FormData();
				bodyFormData.append('image', {
					uri: result.assets[0].uri, name: 'photo.png', filename: 'photo.png', type: 'image/png',
				  });
				bodyFormData.append("type","dish")
				const response = await fetchPost("images",bodyFormData,{
					'Content-Type': 'multipart/form-data',
				})	
				if(response){
                    const imageNameSplit = response.uploadedFile.Location
					setImage(imageNameSplit)
				}
			} catch (error) {
				alert("Error al subir la imagen")
			}
		}
    }
    const navig = useNavigation();
    const guardarRestaurant = async() => {
        const {barrio, calle, email, image, localidad,numero, paiss,provincia, rangeLevel, selectedDays, tipo} = props.route.params
        const operatingHours = () => {
            const aux:any = {}
            selectedDays.map((item:any)=>{
                aux[`${item.day}`] = {
                    ...aux[`${item.day}`],
                    [`${item.type === "desde" ? "open" : "close"}`] : item.hour
                }
            })
            return aux
        }
        const getLocation = 
        await fetchGet(`https://maps.googleapis.com/maps/api/geocode/json?address=${calle.replace(" ","+")}+${provincia.replace(" ","+")}+${paiss.replace(" ","+")}&key=AIzaSyCb2AjCOdOYC5EGb3ok1Yf6JAztPK7KaTE`)
        const lat = getLocation.results.length > 0 ? (getLocation.results[0].geometry.location.lat) : -34.603686
        const long =  getLocation.results.length > 0 ? (getLocation.results[0].geometry.location.lng) : -58.381561
        const dataToPost = {
            dishesType : tipo,
            isCeliac: false,
            operatingHours :operatingHours(),
            mediumImageURL: "https://morfando.s3.amazonaws.com/medium/dish/" + image,
            pricesRange: "$".repeat(rangeLevel),
            name : email,
            isVeggie: false,
            description : "Delicias para nuestros clientes",
            thumbnailImageURL: "https://morfando.s3.amazonaws.com/thumbnail/dish/" + image,
            location:  {
                "coordinates":  [lat,long],
                "address":  `${calle} ${numero}, ${barrio}, ${localidad}, ${provincia}, ${paiss}`
            },
            ownerID:jwtDecode(user.accessToken)._id,
            stars: 3,
            imageURL:"https://morfando.s3.amazonaws.com/large/" + image,
            isClosed: false
        }
        try {
            const response = await fetchPost("restaurant", dataToPost, {})
            const idRestaurant = response.id
            platos.map(async(item: any) => {
                const dataDish = {
                    "imageURL":item.imagen,
                    "mediumImageURL": item.imagen,
                    "thumbnailImageURL": item.imagen,
                    "title": item.titulo,
                    "description": "Los mejores platos",
                    "type":"Promocion",
                    "stars": 4,
                    "price": item.precio,
                    "isVeggie": item.isVegano,
                    "isCeliac": item.isLibreDeGluten,
                    "ingredients": item.ingredientes.replace(" ","").split(","),
                    "restaurantID": idRestaurant
                }
                const responses = await fetchPost("dish", dataDish, {})
            })
            navig.dispatch(StackActions.replace("Main"))
        } catch (error) {
            
        }
    }

  return (
    <View style={styles.container}>
        <View >
            <Text style = {styles.textTitle}> Crear Menú </Text>
        </View>
        <ScrollView style={{flex: 1}}>
            {platos.length === 0 && <Text>Todavia no has agregado platos a tu menu</Text>}
            {platos.map((item:any, index: number)=>(
                <ItemPlato {...item} index={index}/>
            ))}
        </ScrollView>
        <View style={{marginBottom:20}}>
            <ProgressBar
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.85}
            color={COLORS.principal}
            />
        <TouchableOpacity onPress={guardarRestaurant} style = {styles.buttonGuardar}>
            <Text style = {styles.textGuardar}>Guardar</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openModal} style={{position:"absolute",bottom:"17%", right:25}}>
            <Image source={require("../../../assets/images/add.png")}/>
        </TouchableOpacity>
        <Modal visible={showModal} transparent>
            <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.5)", justifyContent:"center"}}>
                <View style={{backgroundColor:"white"}}>
                    <ScrollView>
                    <Text style={{textAlign:"center",marginVertical:10,fontSize:14,fontWeight:"bold"}}>Agregar plato al menu</Text>
                    <TextInput style={styles.inputModal} value={titulo} onChange={(e)=>setTitulo(e.nativeEvent.text)} placeholder="Nombre del plato"/>

                    <TextInput style={styles.inputModal} value={precio} onChange={(e)=>setPrecio(e.nativeEvent.text)} placeholder="Precio"/>
                <TextInput style={styles.inputModal} value={descuento} onChange={(e)=>setDescuento(e.nativeEvent.text)}  placeholder="Descuento (%)"/>
                <TextInput style={styles.inputModal} value={ingredientes} onChange={(e)=>setIngredientes(e.nativeEvent.text)}  placeholder="Ingredientes"/>
                <TextInput style={styles.inputModal} onPressIn={agregarFoto} value={imagen}/>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                    <View>
                        <Text>Plato Vegano</Text>
                         <Switch value={isVegano} onChange={()=>setIsVegano(!isVegano)} style={{ alignSelf:"center"}}/>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text>Libre De Gluten</Text>
                         <Switch value={isLibreDeGluten} onChange={()=>setIsLibreDeGluten(!isLibreDeGluten)} style={{alignSelf:"center"}}/>
                    </View>
                </View>
                <TouchableOpacity onPress={agregarPlato} style={{justifyContent:"center",alignSelf:"center",marginVertical:10,backgroundColor:COLORS.principal,paddingVertical:10,paddingHorizontal:20,borderRadius:50}}>
                    <Text style={{color:"white"}}>Agregar plato</Text>
                </TouchableOpacity>
                </ScrollView>
                </View>
            </View>
        </Modal>
    </View>
  );
}
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blanco,
        flex: 1,
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 21,
        color: COLORS.negro,
        margin: 4
    },
    textComida: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: COLORS.gris,
        marginTop: 15,
        left: '1%'
    },
    textPrecio: {
        color: COLORS.gris,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%'
        
    },
    textDescuento: {
        color: COLORS.gris,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%'
    },
    input: {
        width: '90%',
        alignSelf: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 12,
        textAlign: 'center'
    },
    inputModal: {
        width: '90%',
        alignSelf: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 12,
        textAlign: 'center',
        marginVertical:5
    },
    Switch1: {   
        alignSelf: 'center',
        top: 10,
    },
    Switch2: {   
        alignSelf: 'center',
        top: 10,
        
    },
    buttonIngredientes: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        top: 5,
        
    },
    buttonAgregarFoto: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        top: 5
    },
    textBoton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: COLORS.principal,
        top: 8
    },
    textPlatoVegano: {
        textAlign: 'center',
        top: 6,
        color: COLORS.negro,
    },
    textLibreGluten: {
        textAlign: 'center',
        color: COLORS.negro,
        top: 10,
    },
    barraProgreso: {
        top: 10,
        width: '90%',
        alignSelf: 'center',
    },
    buttonGuardar: {
        width: '40%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: COLORS.principal,
        marginTop:10,
        paddingVertical:5
    },
    textGuardar: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.blanco,
    textAlign: 'center',
    
    },
    buttonBack: {
    width: '15%',
    height: '50%',
    color: COLORS.negro,
    borderColor: COLORS.principal,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: COLORS.principal,
    
    },
    textBack: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.negro,
    textAlign: 'center',
    },
});

export default CrearMenu;