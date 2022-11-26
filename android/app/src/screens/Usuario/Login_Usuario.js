import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity } from "react-native";

const Login_Usuario = (props) => {
  return (
    <View style = {styles.container}>

     <View style = {{flex: .7}}>
      <Image 
      style = {styles.imagen}
      source = {require('../../assets/img/Login.png')}
      >
      </Image>
      </View>

      <View style = {{flex: .1}}>
      <Text style={styles.text}>Iniciar Sesión</Text>
      </View>
      
      <View style = {{flex: .6}}>
              
        <TextInput 
        style = {styles.input}
        placeholder = 'Email'
        placeholderTextColor={'gray'}
        autoCapitalize = 'none'
        />
            
        <TextInput 
        style = {styles.input}
        placeholder = 'Contraseña'
        placeholderTextColor={'gray'}
        autoCapitalize = 'none'
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Cambiar Contraseña de Usuario')}>
        <Text style = {styles.textPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View style = {{flex: .2}}>
      <TouchableOpacity style = {styles.buttonGuardar} onPress={() => props.navigation.navigate('Menú')}>
          <Text style = {styles.textGuardar}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style = {{flex: .5}}>
        <TouchableOpacity style = {styles.buttonGoogle} onPress={() => props.navigation.navigate('Menú')}>
          <Text style = {styles.textGoogle}>Iniciar sesión con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonApple} onPress={() => props.navigation.navigate('Menú')}>
          <Text style = {styles.textApple}>Iniciar sesión con Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonAccount} onPress={() => props.navigation.navigate('Registrar Usuario')}>
          <Text style = {styles.textAccount1}>¿No tienes una cuenta?
          <Text style = {styles.textAccount2}> Registrate</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style = {{flex: .2, backgroundColor:'black'}}>
      <TouchableOpacity style = {styles.buttonSoyRestaurante} onPress={() => props.navigation.navigate('Login Restaurante')}>
          <Text style = {styles.textSoyRestaurante}>Soy Restaurante</Text>
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
      width: '30%',
      left: '5%',
      textAlignVertical: 'center',
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
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
      margin: 12,
      padding: 10
  
    },
    imagen: {
      alignSelf: 'center',
      height: '80%',
      width: '100%',
      resizeMode: 'contain',
      top: '10%'
    },
    buttonBack: {
      width: '15%',
      height: '100%',
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
      height: '70%',
      color: 'black',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
      alignSelf: 'center',
      backgroundColor: 'orange',
    },
    textGuardar: {
      fontFamily: 'Poppins-Medium',
      color: 'white',
      textAlign: 'center',
      top: '25%'
      
    },
    buttonSoyRestaurante: {
      width: '90%',
      height: '70%',
      color: 'black',
      borderColor: 'lightgray',
      borderWidth: 2,
      borderRadius: 100,
      alignSelf: 'center',
      backgroundColor: 'gray',
      top: '20%'
    },
    textSoyRestaurante: {
      fontFamily: 'Poppins-Medium',
      color: 'white',
      textAlign: 'center',
      top: '25%'
      
    },
    textPassword: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        alignSelf: 'flex-end',
        right: '5%',
        color: 'gray'

    },
    textAccount1: {
        color: 'black'

    },
    textAccount2: {
        color: 'blue'
    },
    buttonAccount: {
        alignSelf: 'center'
    },
    buttonGoogle: {
        height: '30%',
        width: '90%',
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: '#D7D7D7',
        margin: 5

    },
    buttonApple: {
        height: '30%',
        width: '90%',
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: 'black',
        borderColor: 'black',
        margin: 5
        

    },
    textGoogle: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        textAlign: 'center',
        top: 12
        
    },
    textApple: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center',
        top: 12       

    },
  
  });
  
  export default Login_Usuario;