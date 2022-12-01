/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { ButtonWithTitle } from '../../components/ButtonWithTittle';
// import { TextFieldEdit } from '../../components/TexFieldEdit';
// import { TextField } from '../../components/TextField';
import { style } from '../../theme/appTheme';

const Platos = () => {
    return (
        <View style={style.fondo}>

            {/* HeaderOrangeBar */}
            <View style={stylesScreen.Headerapp} />
            <View style={stylesScreen.container} />
            <View style={stylesScreen.row}>
            <Text style={ style.titleHeader } >Plato </Text>
            <Image
                style={stylesScreen.tinyLogo}
                source={require('../user/Vegan.png')}
            />
            <Image
                style={stylesScreen.tinyLogo}
                source={require('../user/Sin_TACC.png')}
            />
            </View>
            <View>
                <Text> "Descripcion"</Text>
            </View>
        </View>
    );
};

const stylesScreen = StyleSheet.create({
    container: {
        width: '105%',
        flex: 0.3,
        borderRadius:20,
        borderColor:'orange',
        borderWidth:2,
        left: -10,
        top: -25,
        backgroundColor: 'red',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        right: -250,
      },
      Headerapp:{
        backgroundColor: '#FFBC4F',
        height: '15%',
        width: '1000%',
        borderRadius: 35,
        top: -20,
        left: -30,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
});
export default Platos;
