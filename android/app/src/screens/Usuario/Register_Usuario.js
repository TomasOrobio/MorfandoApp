import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity } from "react-native";

const Register_Usuario = (props) => {
  return (
    <View style = {styles.container}>

     <View style = {{flex: 0.7}}>
      <Image 
      style = {styles.imagen}
      source = {require('../../assets/img/imgRegistrarse.png')}
      >
      </Image>
      </View>

      <View style = {{flex: .2}}>
      <Text style={styles.text}>Registrarse</Text>
      </View>
      
      <ScrollView style = {{flex: 3}}>
        <TextInput 
        style = {styles.input}
        placeholder = 'Nombre'
        placeholderTextColor={'gray'}
        autoCapitalize = 'none'
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Email'
        placeholderTextColor={'gray'}
        autoCapitalize = 'none'
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Teléfono'
        placeholderTextColor={'gray'}
        keyboardType='numeric'
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Contraseña'
        placeholderTextColor={'gray'}
        autoCapitalize = 'none'
        />
      </ScrollView>

      <View style = {{flex: .5}}>
      <TouchableOpacity style = {styles.buttonGuardar} onPress={() => props.navigation.navigate('Login Usuario')}>
          <Text style = {styles.textGuardar}>Crear Cuenta</Text>
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
    text: {
      height: '100%',
      width: '40%',
      left: '5%',
      textAlignVertical: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 25,
      color: 'black',
        
    },
    input: {
      width: '90%',
      heigh: '30%',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'orange',
      backgroundColor: 'white',
      color: 'black',
      fontSize: 12,
      margin: '2%',
      padding: 10
  
    },
    imagen: {
      alignSelf: 'center',
      height: '100%',
      width: '100%',
      resizeMode: 'contain'
      
    },
    buttonBack: {
      width: '15%',
      height: '50%',
      color: 'black',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
      backgroundColor: 'orange',
      
    },
    textBack: {
      fontFamily: 'Poppins-Medium',
      color: 'black',
      textAlign: 'center'
    },
    buttonGuardar: {
      width: '40%',
      height: '50%',
      color: 'black',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
      alignSelf: 'center',
      backgroundColor: 'orange',
    },
    textGuardar: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      top: '35%'
      
    },
  
  });
  
  export default Register_Usuario;
  