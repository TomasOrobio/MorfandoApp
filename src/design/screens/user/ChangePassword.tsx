/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import {COLORS} from '../../theme/appTheme';

const ChangePassword = () => {
    return (    

        <View style = {styles.container}>

          

          <View style = {{flex: .2}}>
              <TouchableOpacity style = {styles.buttonBack}>
              <Text style = {styles.textBack}>BACK</Text>
              </TouchableOpacity>
          </View>
  
          <View style={{flex: 1.5}}>
          <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/imgCambiarContraseña.png')}
           />
          </View>
    
          <View style={{flex: .5}}>
          <Text style={styles.textTitle}>Cambiar Contraseña</Text>
          <Text style={styles.textSubtitle}>Te enviaremos un mail para restablercer la contraseña.</Text>
          </View>

    
          <View style={{flex: .5}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            />
          </View>

          <View style = {{flex: .5}}>
            <TouchableOpacity style = {styles.buttonGuardar}>
                <Text style = {styles.textGuardar}>Guardar</Text>
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
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: COLORS.negro,
        margin: 10,
        textAlign: 'center',
        height: '25%',
        width: '75%',
        alignSelf: 'center',        
    
      },
      textSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: COLORS.gris,
        margin: 20,
        textAlign: 'center',
        alignSelf: 'center',
        height: '35%',
        width: '75%',
        
      },

      input: {
        margin: 20,
        padding: 10,
        width: '90%',
        height: '40%',
        borderWidth: 2,
        borderColor: COLORS.principal,
        borderRadius: 10,
        fontSize: 16,
    
      },
      imagen: {
        alignSelf: 'center',
        height: 225,
        width: 336.4,
        top: 60,
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
        textAlign: 'center',
      },
      buttonGuardar: {
        width: '90%',
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
        fontSize: 18,
        color: COLORS.blanco,
        textAlign: 'center',
        top: '25%'
        
      },
    
    });

export default ChangePassword;