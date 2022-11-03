/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from '../../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';


const Misrestaurantes = () => {



    return (
        <View style={styles.fondo}>

            {/* HeaderOrangeBar */}
            {/* <View style={styles.Headerapp}>
                <Text style={styles.Headerapptext}> Mis Restaurantes  </Text>
            </View> */}


                <View style={styles.bannerHeaderapp}>
                <Text> Mis Restaurantes  </Text>
                </View>


            {/* Mis Restaurantes Items */}
            <ScrollView>
                <View style={ stylesApp.nameContainer }>
                    {/* Icon */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                    </View>
                    {/* Icon */}
                    </View>

                <View style={ stylesApp.nameContainer }>
                    {/* Icon */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                    </View>
                    {/* Icon */}
                    </View>

                <View style={ stylesApp.nameContainer }>
                    {/* Icon */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                    </View>
                    {/* Icon */}
                    </View>
            </ScrollView>

            

            {/* TODO BOTON FLOTANTE */}
            <TouchableOpacity style={stylesApp.fabLocation}>
                <View style={stylesApp.fab}>
                    <Text style={stylesApp.fabText}>+</Text>
                </View>

            </TouchableOpacity>
        </View>

    );
};

const stylesApp = StyleSheet.create({
    nameContainer:{
        marginTop:20,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
    },
    image:{
        width:80,
        height: 80,
        marginRight:15,
        borderRadius: 30,

    },
    icon:{
        width: 60,
        height: 40, 
        marginLeft:20,
        marginTop:20,
    },
    titleName:{
        marginTop:15,
        fontSize:20,
    },
    descriptionName:{
        marginTop:5,
        fontSize: 14,// fontSize:14,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    fab: {
        backgroundColor: 'orange',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 40,
        // fontWeight: 'bold',
        alignSelf: 'center',
    }
});


export default Misrestaurantes;