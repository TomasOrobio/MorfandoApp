/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity } from "react-native";
import {COLORS} from '../../theme/appTheme';

const FotosRestaurante = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style = {styles.textTitle}>
                    Subir Fotos
                </Text>
            </View>

            <View style={{flex: 2}}>
                <TouchableOpacity style = {styles.buttonSubirFoto}>
                    <Text style = {styles.textBoton}>Subir foto</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 2}}>
                <Text style={styles.textRangoPrecio}>
                    Rango de Precio
                </Text>
            </View>

            <View style={{flex: 1}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={COLORS.principal}
            width = {'90%'}
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
        width: '25%',
        height: '15%',
        margin: 20,
        marginTop: 50,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: COLORS.negro,        
    },
    buttonSubirFoto: {
        width: '20%',
        height: '10%',
        alignSelf: 'center',
        alignItems: 'center',
        top: '45%',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: COLORS.principal,
    },
    textBoton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: COLORS.principal

    },
    textRangoPrecio: {
        marginTop: 10,
        padding: 25,
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: COLORS.negro,
        width: '100%',
        height: 250,

    },
    barraProgreso: {
        alignSelf: 'center',
    },

});

export default FotosRestaurante;