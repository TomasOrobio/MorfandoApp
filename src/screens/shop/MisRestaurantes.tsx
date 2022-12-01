import React from "react";
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, } from "react-native";
import {COLORS} from "../../theme/appTheme";
import Edit from "../../../assets/images/Edit";
import { FC_RN } from "../../navigation/Navigation.type";

const MisRestaurantes: FC_RN<{addRestaurant: undefined}> = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <View style = {{flex: .1}}>
            <Text style = {styles.textTitle}>Mis Restaurantes</Text>
        </View>

        <ScrollView style = {{flex: 1}}>
        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style={{ flex: 0.2 }}>
					<TouchableOpacity style={styles.buttonEditar}>
						<Edit fontSize={26} color="white" />
					</TouchableOpacity>
				</View>
        </View>
        </TouchableOpacity>

        </ScrollView>

        <View style = {{flex: .2}}>
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