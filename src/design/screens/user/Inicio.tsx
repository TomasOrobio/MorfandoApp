import React, { useState } from "react";
import { View, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity, Image, ScrollView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const Inicio = () => {
    return (
        <View style={styles.container}>
            <View>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/FotoInicio.png')}
           />
          </View>

            <View>
                <Text style = {styles.text}>Morfando Inc</Text>
            </View>
            
        </View>
      );
    };
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.principal,
        flex: 1,
    },
    imagen: {
        alignSelf: 'center',
        height: 186,
        width: 182,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: '50%',
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 48,
        color: COLORS.negro,
        alignSelf: 'center',

    },

});

export default Inicio;