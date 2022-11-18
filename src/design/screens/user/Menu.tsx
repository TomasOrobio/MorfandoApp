import React, { useState } from "react";
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity, Image, ScrollView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const Menu = () => {
    return (
        <View style={styles.container}>
            <View style = {{flex: .2, backgroundColor: COLORS.principal}}>
              <Text style={styles.textTitle}>Dirección</Text>
            </View>

            <View style = {{flex: .2, flexDirection: 'row'}}>
                <View style = {{flex: 1}}>
                    <Text>SearchBar</Text>
                </View>

                <View style = {{flex: .5}}>
                    <TouchableOpacity style={styles.buttonFiltrar}>
                        <Text style={styles.textFiltrar}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {{flex: .1}}>
              <Text style={styles.textSubtitle}>Cerca de ti</Text>
            </View>

            <ScrollView style = {{flex: 1}}>
            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

                <View style = {{flex: 1}}>
                    <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style={styles.textDireccion}>Dirección</Text>
                    <Text style={styles.textCalificacion}>Iconos calificación</Text>
                </View>
            </View>
            </TouchableOpacity>

            
            
            </ScrollView>
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
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        margin: 5
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: COLORS.blanco,
        left: 15,
        top: '40%'        

    },
    textSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: COLORS.negro,
        left: '5%'

    },
    textNombreRestaurante: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: COLORS.negro,
        marginTop: '2%'

    },
    textDireccion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: COLORS.negro
    },
    buttonFiltrar: {
        width: '80%',
        height: '40%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        top: 25,
        alignSelf: 'center',
        backgroundColor: COLORS.principal,
    },
    textFiltrar: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.blanco,
        textAlign: 'center',
        fontSize: 18,
        top: '20%'
    
    },
    textCalificacion: {
        color: COLORS.gris

    },
    

});

export default Menu;