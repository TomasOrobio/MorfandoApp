import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

const ChangePassword_Usuario = (props) => {
    return (    

        <View style = {styles.container}>
  
          <View style={{flex: 1.5}}>
          <Image 
          style = {styles.imagen}
          source = {require('../../assets/img/imgCambiarContraseña.png')}
          >
          </Image>
          </View>
    
          <View style={{flex: .5}}>
          <Text style={styles.textTitle}>Cambiar Contraseña</Text>
          <Text style={styles.textSubtitle}>Te enviaremos un mail para restablercer la contraseña.</Text>
          </View>

    
          <View style={{flex: .5}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            placeholderTextColor={'gray'}
            />
          </View>

          <View style = {{flex: .5}}>
            <TouchableOpacity style = {styles.buttonGuardar} onPress={() => props.navigation.navigate('Login Usuario')}>
                <Text style = {styles.textGuardar}>Guardar</Text>
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
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: 'black',
        margin: 10,
        textAlign: 'center',
        height: '25%',
        width: '75%',
        alignSelf: 'center',        
    
      },
      textSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'gray',
        margin: 20,
        textAlign: 'center',
        alignSelf: 'center',
        height: '35%',
        width: '75%',
        
      },

      input: {
        marginTop: 20,
        alignSelf: 'center',
        padding: 10,
        width: '90%',
        height: '40%',
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 10,
        fontSize: 16,
        color: 'black'
    
      },
      imagen: {
        alignSelf: 'center',
        height: '100%',
        width: '80%',
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
        textAlign: 'center',
      },
      buttonGuardar: {
        width: '90%',
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
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        top: '25%'
        
      },
    
    });

export default ChangePassword_Usuario;