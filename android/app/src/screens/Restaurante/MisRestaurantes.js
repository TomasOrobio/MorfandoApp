import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity } from "react-native";

const MisRestaurantes = (props) => {
  return (
    <View style = {styles.container}>
        <View style = {{flex: .1}}>
            <Text style = {styles.textTitle}>Mis Restaurantes</Text>
        </View>

        <ScrollView style = {{flex: 1}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Detalle Restaurante')}>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar} onPress={() => props.navigation.navigate('Información Restaurante')}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
                style = {styles.imagen}
                source = {require('../../assets/img/restaurante-random.png')}
                >
            </Image>
            </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>


        </ScrollView>

        <View style = {{flex: .2}}>
            <TouchableOpacity style = {styles.buttonAgregar} onPress={() => props.navigation.navigate('Información Restaurante')}>
                <Text style = {styles.textAgregar}>+</Text>
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
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        textAlign: 'center',
        color: 'black',

    },
    textNombre: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        textAlign: 'left',
        color: 'black',
        marginTop: 5

    },
    textUbicacion: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        textAlign: 'left',
        color: 'gray',
        marginTop: 5

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
    textAgregar: {
        fontSize: 50,
        alignSelf: 'center',
        bottom: 5,
        color: 'white',
        bottom: 10

    },
    textEditar: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 5,
        color: 'gray'

    },
    buttonAgregar: {
        width: '15%',
        height: '50%',
        backgroundColor: 'orange',
        alignSelf: 'flex-end',
        margin: 30,
        borderRadius: 100,
        textAlign: 'center'

    },
  
  });
  
  export default MisRestaurantes;