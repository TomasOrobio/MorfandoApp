import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { COLORS } from "../../../design/theme/appTheme";

const Register = () => {
  return (
    <View style = {styles.container}>

      <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonBack}>
          <Text style = {styles.textBack}>BACK</Text>
        </TouchableOpacity>
      </View>

     <View style = {{flex: 0.7}}>
     <Image
                style={styles.imagen}
                source={require('../../../assets/images/imgRegistrarse.png')}
            />
      </View>

      <View style = {{flex: .2}}>
      <Text style={styles.text}>Registrarse</Text>
      </View>
      
      <ScrollView style = {{flex: 3}}>
        <TextInput 
        style = {styles.input}
        placeholder = 'Nombre'
        placeholderTextColor={COLORS.gris}
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Email'
        placeholderTextColor={COLORS.gris}
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Teléfono'
        placeholderTextColor={COLORS.gris}
        keyboardType='numeric'
        />
      
        <TextInput 
        style = {styles.input}
        placeholder = 'Contraseña'
        placeholderTextColor={COLORS.gris}
        />
      </ScrollView>

      <View style = {{flex: .5}}>
      <TouchableOpacity style = {styles.buttonGuardar}>
          <Text style = {styles.textGuardar}>Crear Cuenta</Text>
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
    text: {
      height: '100%',
      width: '40%',
      left: '5%',
      textAlignVertical: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 25,
      color: COLORS.negro,
        
    },
    input: {
      width: '90%',
      heigh: '30%',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: COLORS.principal,
      backgroundColor: 'white',
      color: COLORS.negro,
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
      color: COLORS.negro,
      borderColor: COLORS.principal,
      borderWidth: 2,
      borderRadius: 100,
      backgroundColor: COLORS.principal,
      
    },
    textBack: {
      fontFamily: 'Poppins-Medium',
      color: COLORS.negro,
      textAlign: 'center'
    },
    buttonGuardar: {
      width: '40%',
      height: '50%',
      color: COLORS.negro,
      borderColor: COLORS.principal,
      borderWidth: 2,
      borderRadius: 100,
      alignSelf: 'center',
      backgroundColor: COLORS.principal,
    },
    textGuardar: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      color: COLORS.blanco,
      textAlign: 'center',
      top: '35%'
      
    },
  
  });
  
  export default Register;
  