import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";

const FavoritosNoitems = (props) => {
  return (
    <View style = {styles.container}>

        <View style = {{flex: .4, backgroundColor: 'orange'}}>
            <Text style = {styles.textTitle}>Favoritos</Text>
        </View>
        

        <View style = {{flex: 1}}>
            <Text style = {styles.text}>No hay restaurantes en favoritos</Text>
        </View>

        <View style = {{flex: 1}}>
        <TouchableOpacity style = {styles.buttonExplorar} onPress={() => props.navigation.navigate('Menú')}>
            <Text style = {styles.textExplorar}>Explorar</Text>
        </TouchableOpacity>
        </View>
      
      </View>
    
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,      
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        top: '40%'
        

    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
        alignSelf:'center',
        top: '70%'
    },
    buttonExplorar: {
        width: '50%',
        height: '20%',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: 'orange',
    },
    textExplorar: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    top: '25%'
    
    },
        
    
  
  });
  
  export default FavoritosNoitems;