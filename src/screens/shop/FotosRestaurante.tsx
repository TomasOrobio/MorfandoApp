import React, { useState } from "react";
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity, Image } from "react-native";
import {COLORS} from '../../theme/appTheme';

const FotosRestaurante = () => {
    return (
        <View style={styles.container}>

            <View style = {{flex: .2}}>
                <TouchableOpacity style = {styles.buttonBack}>
                <Text style = {styles.textBack}>BACK</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: .1}}>
                <Text style={styles.text}>
                    Subir Fotos
                </Text>
            </View>

            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style={{flex: .2}}>
                <TouchableOpacity style = {styles.buttonSeleccionarFoto}>
                    <Text style = {styles.textSeleccionarFoto}>Seleccionar foto</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: .2}}>
                <Text style={styles.text}>
                    Rango de Precio
                </Text>
            </View>

            <View style={{flex: .8}}>
                <Text>top bar</Text>
                <Text>$   $$   $$$   $$$$</Text>
            </View>

            <View style={{flex: .1}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={COLORS.principal}
            />
            </View> 

            <View style = {{flex: .4}}>
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
    imagen: {
        alignSelf: 'center',
        height: '95%',
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.negro,
        top: '2%'
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
    buttonSeleccionarFoto: {
        width: '50%',
        height: '100%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: COLORS.principal,

    },
    textSeleccionarFoto: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: COLORS.blanco,
        textAlign: 'center',
        top: '25%'

    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: COLORS.negro,
        width: '100%',
        height: '100%',
        left: '5%',

    },
    buttonGuardar: {
        width: '40%',
        height: '50%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        top: 20,
        alignSelf: 'center',
        backgroundColor: COLORS.principal,
    },
    textGuardar: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.blanco,
        textAlign: 'center',
        top: '25%'
    
    },
    barraProgreso: {
        alignSelf: 'center',        
    },

});

export default FotosRestaurante;