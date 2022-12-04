import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const MenuItemPlatoDetalle = (props: any) => {
  const data = props.route.params
  
  return (
    <ScrollView style = {styles.container}>

        <View style = {{backgroundColor: COLORS.principal}}>
        </View>

        <View style = {{backgroundColor: COLORS.blanco}}>
        <Image 
          style = {[styles.imagen, { height:200,width:"100%", resizeMode:"contain"}]}
          source = {{uri:data.imageURL}}
           />
          </View>

        <View style = {{flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Text style = {styles.textTitle}>{data.title}</Text>
            <Text style = {styles.textNombrePlato}>{data.description}</Text>
            </View>

            {data.isCeliac && <View style = {{flex: .3}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>
}

            {data.isVeggie && <View style = {{flex: .3}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
}
        </View>

        <View>
            <Text style = {styles.textIngrediente}>Ingredientes</Text>
            {data.ingredients.map((itemI)=>(
              <Text style = {styles.textIngredientes}>• {itemI}</Text>
            ))}
        </View>
      
      </ScrollView>
    
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,      
    },
    imagen: {
        alignSelf: 'center',
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