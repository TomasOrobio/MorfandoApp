/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import {COLORS} from '../../theme/appTheme';

const ChangePassword = () => {
    return (
        <View style = {styles.container}>
  
          <View style={{flex: 3}}>
          <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/ChangePass.png')}
          >
          </Image>
          </View>
    
          <View style={{flex: 1}}>
          <Text style={styles.textTitle}>Cambiar Contraseña</Text>
          <Text style={styles.textSubtitle}>Te enviaremos un mail para restablercer la contraseña.</Text>
          </View>

    
          <View style={{flex: 2}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            />
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
        borderWidth: 2,
        borderColor: COLORS.principal,
        borderRadius: 10,
        fontSize: 16,
    
      },
      imagen: {
        alignSelf: 'center',
        height: 225,
        width: 336.4,
        top: 141,
      },
    
    });

export default ChangePassword;