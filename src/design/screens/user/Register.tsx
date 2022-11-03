/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native';
import { ButtonWithTitle } from '../../components/ButtonWithTittle';
import {COLORS} from '../../theme/appTheme';

const Register = () => {
    return (
      <View style = {styles.container}>

        <View style={{flex: 2}}>
        <Image
        style = {styles.imagen}
        source = {require('../../../assets/images/Registro.png')}
         />
        </View>

        <View>
        <Text style={styles.text}>Registrarse</Text>
        </View>

        <View style={{flex: 3}}>
          <TextInput
          style = {styles.input}
          placeholder = "Nombre"
          />



          <TextInput
          style = {styles.input}
          placeholder = "Email"
          />



          <TextInput
          style = {styles.input}
          placeholder = "Teléfono"
          />



          <TextInput
          style = {styles.input}
          placeholder = "Contraseña"
          />
        </View>
        <ButtonWithTitle width={120} height={60} title={'Guardar'}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,
    },
    text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 25,
      color: COLORS.negro,
      margin: 12,

    },
    input: {
      margin: 15,
      borderWidth: 2,
      borderColor: COLORS.principal,
      borderRadius: 10,
      fontSize: 16,
      padding: 10,

    },
    imagen: {
      alignSelf: 'center',
      height: 196,
      width: 227.6,
      top: 60,
    },

  });

  export default Register;

