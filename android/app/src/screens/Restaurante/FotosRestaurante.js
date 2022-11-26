import React, { useState } from "react";
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity, Image } from "react-native";

const FotosRestaurante = (props) => {
    return (
        <View style={styles.container}>

            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
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
            progress={0.75}
            color={'orange'}
            width = {'90%'}
            />
            </View> 

            <View style = {{flex: .4}}>
                <TouchableOpacity style = {styles.buttonGuardar} onPress={() => props.navigation.navigate('Crear Menú')}>
                    <Text style = {styles.textGuardar}>Siguiente</Text>
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
    imagen: {
        alignSelf: 'center',
        height: '95%',
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        top: '2%'
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
    buttonSeleccionarFoto: {
        width: '50%',
        height: '100%',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: 'orange',

    },
    textSeleccionarFoto: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        top: '25%'

    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: 'black',
        width: '100%',
        height: '100%',
        left: '5%',

    },
    buttonGuardar: {
        width: '40%',
        height: '50%',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
        top: 20,
        alignSelf: 'center',
        backgroundColor: 'orange',
    },
    textGuardar: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center',
        top: '25%'
    
    },
    barraProgreso: {
        alignSelf: 'center',        
    },

});

export default FotosRestaurante;