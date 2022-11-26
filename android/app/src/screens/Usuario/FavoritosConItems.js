import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";

const FavoritosConItems = (props) => {
  return (
    <View style = {styles.container}>

        <View style = {{flex: .2, backgroundColor: 'orange'}}>
            <Text style = {styles.textTitle}>Favoritos</Text>
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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
                <View>
                    <Text style = {styles.textNombreRestaurante}>Nombre restaurante</Text>
                    <Text style = {styles.textDireccion}>Dirección</Text>
                    <Text style = {styles.textIconos}>iconos estrellas calificación</Text>
                </View>

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
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        top: '40%'
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
    textNombreRestaurante: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginTop: '2%'

    },
    textDireccion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black'

    },
    textIconos: {
        color: 'gray'

    },
           
    
  
  });
  
  export default FavoritosConItems;