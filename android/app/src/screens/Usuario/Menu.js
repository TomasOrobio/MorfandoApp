import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput, autoFocus,onEndEditing } from "react-native";

const Menu = (props) => {
    return (
        <View style={styles.container}>
            <View style = {{flex: .2, backgroundColor: 'orange'}}>
                <TouchableOpacity style={styles.textTitle}>
                    <Text style={styles.textTitle}>Dirección</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flex: .2, flexDirection: 'row'}}>
                <View style = {{flex: 1}}>
                <View style={styles.searchBar}>
                    <TextInput 
                        style={{  marginLeft: 5, fontSize: 20, height: '80%', width: '100%', backgroundColor: 'lightgray', borderRadius: 50, top: 5}}
                        placeholder={"¿Qué desea buscar?"}
                        autoFocus={autoFocus}
                        onEndEditing={onEndEditing}
                    /> 
                 </View>
            </View>

                <View style = {{flex: .5}}>
                    <TouchableOpacity style={styles.buttonFiltrar} onPress={() => props.navigation.navigate('Filtros')}>
                        <Text style={styles.textFiltrar}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {{flex: .1}}>
              <Text style={styles.textSubtitle}>Cerca de ti</Text>
            </View>

            <ScrollView style = {{flex: 1}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Detalle Menú Restaurante')}>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: .5}}>
                    <Image 
                        style = {styles.imagen}
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
                        source = {require('../../assets/img/restaurante-random.png')}
                        >
                    </Image>
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
        backgroundColor: 'white',
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
        fontSize: 18,
        color: 'white',
        left: 15,
        top: '40%'        

    },
    textSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
        left: '5%'

    },
    textNombreRestaurante: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black',
        marginTop: '2%'

    },
    textDireccion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black'
    },
    buttonFiltrar: {
        width: '80%',
        height: '40%',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
        top: 20,
        alignSelf: 'center',
        backgroundColor: 'orange',
    },
    textFiltrar: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        top: '20%'
    
    },
    textCalificacion: {
        color: 'gray'

    },
    

});

export default Menu;