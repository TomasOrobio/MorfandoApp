import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity } from "react-native";

const MenuItem_Usuario = (props) => {
  return (
    <View style = {styles.container}>


      <View style = {{flex: 1}}>
        <Image 
            style = {styles.imagenResto}
            source = {require('../../assets/img/Resto.png')}
            >
        </Image>
      </View>

      <View style = {{flex: .5, flexDirection: 'row'}}>
        <View style = {{flex: 1.5}}>
            <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
            <Text style = {styles.textCalificacion}>Calificación
            <Text style = {styles.textDireccion}> Dirección</Text>
            </Text>
            <Text style={styles.textDireccion}>Dirección</Text>
        </View>

        <View style = {{flex: .5}}>
            <Text style={styles.textIconos}>ICONO MAPA</Text>
        </View>
        

      </View>

      
      <View style = {{flex: .3, flexDirection: 'row'}}>
        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>

        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>

        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>
      </View>

      <View style = {{flex: 2}}>
        <ScrollView>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('Detalle del Plato')}>
        <View style = {styles.container1}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/Resto.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/LibreGluten.png')}
                >
            </Image>
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/Vegano.png')}
                >
            </Image>
            </View>
        </View>
        </TouchableOpacity>

        <View style = {styles.container1}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/Resto.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/LibreGluten.png')}
                >
            </Image>
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/Vegano.png')}
                >
            </Image>
            </View>
        </View>

        <View style = {styles.container1}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/Resto.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/LibreGluten.png')}
                >
            </Image>
            </View>

            <View style = {{flex: .5}}>
            <Image 
                style = {styles.imagen1}
                source = {require('../../assets/img/Vegano.png')}
                >
            </Image>
            </View>
        </View>

        </ScrollView>
      </View>
      
      </View>
    
  );
};
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,      
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10      
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
    imagenResto: {
        alignSelf: 'center',
        height: '100%',
        width: '100%'
    },
    imagen: {
        alignSelf: 'center',
        height: '100%',
        width: '70%',
        borderRadius: 30,
        resizeMode: 'contain',
    },
    textComida: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'black'
    },
    textDescuento: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 10,
        backgroundColor: 'orange',
        width: '20%',
        textAlign: 'center',
        color: 'white'
    },
    textPrecio: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'orange'

    },
    textNombreRestaurante: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: 'black',
        left: 5
    },
    textEspecialidad: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'gray',
        left: 5

    },
    textCalificacion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'gray',
        left: 5

    },
    textDireccion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'gray',
        left: 5

    },
    imagen1: {
        alignSelf: 'center',
        top: 10

    },
    textIconos: {
        color: 'gray'
    },
    
    
  
  });
  
  export default MenuItem_Usuario;