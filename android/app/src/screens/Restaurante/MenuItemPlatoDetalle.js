import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity } from "react-native";

const MenuItemPlatoDetalle = () => {
  return (
    <View style = {styles.container}>

        <View style = {{flex: .4, backgroundColor: 'orange'}}>
        </View>

        <View style = {{flex: 1, backgroundColor: 'white'}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/PlatoEjemplo.png')}
                >
            </Image>
        </View>
        
        
        <View style = {{flex: .4, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Text style = {styles.textTitle}>Titulo</Text>
            <Text style = {styles.textNombrePlato}>Nombre plato</Text>
            </View>

            <View style = {{flex: .3}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/LibreGluten.png')}
                >
            </Image>
            </View>

            <View style = {{flex: .3}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/Vegano.png')}
                >
            </Image>
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
      backgroundColor: 'white',
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
        color: 'black',
        marginLeft: 15

    },
    textNombrePlato: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
        marginLeft: 15

    },
    textIngrediente: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: 'black',
        marginLeft: 15
    },
    textIngredientes: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'black',
        marginLeft: 15

    },
        
    
  
  });
  
  export default MenuItemPlatoDetalle;