/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { styles } from '../../theme/appTheme';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ButtonWithTitle } from '../../components/ButtonWithTittle';
import { TextFieldEdit } from '../../components/TexFieldEdit';


const Perfil = () => {
    return (
        <View>

            {/* HeaderOrangeBar */}
            <View style={styles.BannerHeaderapp}>
                <Text style={styles.BannerTextHeaderapp}> Perfil </Text>
            </View>

            {/* FotoProfile + Text */}
            <View style={stylesScreen.container}>
                    {/* {/* //Styles.icon    */}
                <View>
                    <Text style={ stylesScreen.titlename } >Hola! </Text>
                    <Text style={ stylesScreen.text } >{'name ' + 'apellido'} </Text>
                </View>
            </View>

            <ButtonWithTitle width={'30%'} height={40} title={'Cambiar Foto'}></ButtonWithTitle>

            {/* Input Personal Info */}
            <View>

                <View style={stylesScreen.inputContainer}>
                    <TextFieldEdit placeholder={'Telefono'}></TextFieldEdit>
                                    {/* {/* //Styles.icon    */}
                </View>

                <View style={stylesScreen.inputContainer}>
                    <TextFieldEdit placeholder={'Telefono'}></TextFieldEdit>
                                    {/* {/* //Styles.icon    */}
                </View>

                <View style={stylesScreen.inputContainer}>
                    <TextFieldEdit placeholder={'Telefono'}></TextFieldEdit>
                                   {/* {/* //Styles.icon    */}
                </View>

            </View>

            <ButtonWithTitle  width={'30%'} height={50} title={'Cerrar Session'}></ButtonWithTitle>
            <ButtonWithTitle width={'30%'} height={50} title={'Eliminar Cuenta'}></ButtonWithTitle>

        </View>

    );
};

const stylesScreen = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection:'row',
    },
    inputContainer: {
        padding: 5,
        flexDirection:'row',
    },
    image:{
        width: 100,
        height: 100,
        borderRadius:20,
        borderColor:'orange',
        borderWidth:2,
    },
    icon:{
        width: 40,
        height: 40, 
        margin: 10,
        marginRight: 30,

    },
    text:{
        fontSize: 24,
        paddingLeft: 20,
    },
    titlename:{
        fontSize:30,
        paddingLeft: 20,
    }
});

export default Perfil;