import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, FlatList, } from "react-native";
import {COLORS} from "../../theme/appTheme";
import Edit from "../../../assets/images/Edit";
import { FC_RN } from "../../navigation/Navigation.type";
import { fetchGet } from "../../services";
import { useAuth } from "../../provider/AuthProvider";
import jwtDecode from "jwt-decode";

const MisRestaurantes: FC_RN<{addRestaurant: undefined}> = ({navigation}) => {
    const [restaurants,setRestaurants] = useState([])
    const getMisRestaurants = async() => {
        try {
            const response = await fetchGet("restaurant")
        setRestaurants(response.restaurants)
        } catch (error) {
            alert("Error al obtener los datos")
        }
    }

    useEffect(()=>{
        getMisRestaurants()
    }, [])

  return (
    <View style = {styles.container}>
        <View>
            <Text style = {styles.textTitle}>Mis Restaurantes</Text>
        </View>
        <FlatList 
        data={restaurants}
        keyExtractor = {(_item,_index: any) => _index}
        renderItem={({item} : any)=>(
<TouchableOpacity>

<View style = {{flex: 1, flexDirection: 'row'}}>
    <View style = {{flex: 1}}>
    <Image 
  style = {styles.imagen}
  source = {{uri: item.mediumImageURL}}
   />
  </View>

    <View style = {{flex: 1.5}}>
    <Text style = {styles.textNombre}>{item.name}</Text>
    <Text style = {styles.textUbicacion}>{item.location.address}</Text>
    </View>

    <View style={{ flex: 0.2 }}>
            <TouchableOpacity style={styles.buttonEditar}>
                <Edit fontSize={26} color="white" />
            </TouchableOpacity>
        </View>
</View>
</TouchableOpacity>
        )}
        />

        <View style={{position:"absolute", bottom: 0, right:10}}>
            <TouchableOpacity onPress={()=> navigation?.navigate('addRestaurant')}>
                <Image source={require('../../../assets/images/add.png')} style={styles.buttonAgregar}/>
            </TouchableOpacity>
        </View>

    </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,    
    },
    buttonEditar: {
        alignSelf: 'center',
        top: 20,
        marginRight: 20,
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.negro,
        marginTop: 5,
    },
    textNombre: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        textAlign: 'left',
        color: COLORS.negro,
        marginTop: 5

    },
    textUbicacion: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        textAlign: 'left',
        color: COLORS.gris,
        marginTop: 5

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
    textAgregar: {
        fontSize: 50,
        alignSelf: 'center',
        bottom: 5,
        color: COLORS.blanco

    },
    textEditar: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 5,
        color: COLORS.gris

    },
    buttonAgregar: {
        alignSelf: 'flex-end',
        margin: 15,
        textAlign: 'center'

    },
  
  });
  
  export default MisRestaurantes;