import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const MenuItemPlatoDetalle = () => {
  return (
    <View style = {styles.container}>

        <View style = {{flex: .4, backgroundColor: COLORS.principal}}>
        </View>

        <View style = {{flex: 1, backgroundColor: COLORS.blanco}}>
        <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/PlatoEjemplo.png')}
           />
          </View>

        <View style = {{flex: .4, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Text style = {styles.textTitle}>Titulo</Text>
            <Text style = {styles.textNombrePlato}>Nombre plato</Text>
            </View>

            <View style = {{flex: .3}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .3}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>

        <View style = {{flex: 1}}>
            <Text style = {styles.textIngrediente}>Ingredientes</Text>
            <Text style = {styles.textIngredientes}>• Ingrediente1</Text>
            <Text style = {styles.textIngredientes}>• Ingrediente2</Text>
            <Text style = {styles.textIngredientes}>• Ingrediente3</Text>
        </View>
      
      </View>
    
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,      
    },
    imagen: {
        alignSelf: 'center',
        height: '100%',
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 30,
    },
    imagen1: {
        alignSelf: 'center'

    },
    textTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: COLORS.negro,
        marginLeft: 15

    },
    textNombrePlato: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: COLORS.negro,
        marginLeft: 15

    },
    textIngrediente: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: COLORS.negro,
        marginLeft: 15
    },
    textIngredientes: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: COLORS.negro,
        marginLeft: 15

    },
        
    
  
  });
  
  export default MenuItemPlatoDetalle;