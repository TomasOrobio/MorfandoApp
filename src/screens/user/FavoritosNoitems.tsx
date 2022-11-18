import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const FavoritosNoitems = () => {
  return (
    <View style = {styles.container}>

        <View style = {{flex: .4, backgroundColor: COLORS.principal}}>
            <Text style = {styles.textTitle}>Favoritos</Text>
        </View>
        

        <View style = {{flex: 1}}>
            <Text style = {styles.text}>No hay restaurantes en favoritos</Text>
        </View>

        <View style = {{flex: 1}}>
        <TouchableOpacity style = {styles.buttonExplorar}>
            <Text style = {styles.textExplorar}>Explorar</Text>
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
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: COLORS.blanco,
        alignSelf: 'center',
        top: '40%'
        

    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: COLORS.negro,
        alignSelf:'center',
        top: '70%'
    },
    buttonExplorar: {
        width: '50%',
        height: '20%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: COLORS.principal,
    },
    textExplorar: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.blanco,
    textAlign: 'center',
    fontSize: 18,
    top: '25%'
    
    },
        
    
  
  });
  
  export default FavoritosNoitems;