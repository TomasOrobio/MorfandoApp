import React from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";

const Perfil_Usuario = (props) => {
  return (
    <View style = {styles.container}>

      <View style = {{flex: .4, backgroundColor: 'orange'}}>
      <Text style={styles.textTitle}>Perfil</Text>
      </View>
      
      <View style = {{flex: .4, flexDirection: 'row'}}>

        <View style = {{flex: .5}}>
            <TouchableOpacity>
            <Image 
            style = {styles.imagen}
            source = {require('../../assets/img/Perfil.png')}
            >
            </Image>
            </TouchableOpacity>
        </View>

        <View style = {{flex: 1.5}}>
            <Text style={styles.textHola}>Hola!</Text>
            <Text style={styles.textUserName}>nombre de usuario</Text>
        </View>

      </View>

      <View style = {{flex: .3}}>
        <TouchableOpacity style={styles.buttonCambiarFoto}>
            <Text style={styles.textCambiarFoto}>Cambiar foto</Text>
        </TouchableOpacity>
      </View>

      <View style = {{flex: .3, flexDirection: 'row'}}>
        <View style = {{flex: 1.5}}>
        <TextInput 
            style = {styles.input}
            placeholder = 'Nombre'
            placeholderTextColor={'gray'}
        />
        
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonEditar}>
            <Text style = {styles.textEditar}>Editar</Text>
        </TouchableOpacity>

        </View>
        
      </View>

      <View style = {{flex: .3, flexDirection: 'row'}}>
        <View style = {{flex: 1.5}}>
        <TextInput 
            style = {styles.input}
            placeholder = 'Teléfono'
            placeholderTextColor={'gray'}
            keyboardType='numeric'
        />
        
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonEditar}>
            <Text style = {styles.textEditar}>Editar</Text>
        </TouchableOpacity>

        </View>
        
      </View>

      <View style = {{flex: .3, flexDirection: 'row'}}>
        <View style = {{flex: 1.5}}>
        <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            placeholderTextColor={'gray'}
        />
        
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonEditar}>
            <Text style = {styles.textEditar}>Editar</Text>
        </TouchableOpacity>

        </View>
        
      </View>

      <View style = {{flex: 1}}>
        <TouchableOpacity style={styles.buttonCerrarSesion} onPressOut={() => Alert.alert('Se ha cerrado la sesión correctamente.')} onPress={() => props.navigation.navigate('Login Usuario')}>
            <Text style={styles.textCerrarSesion}>Cerrar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDesactivarCuenta}>
            <Text style={styles.textDesactivarCuenta}>Desactivar cuenta</Text>
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
        color: 'white',
        alignSelf: 'center',
        top: '30%'
        

    },
    textHola: {
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        color: 'black',
        alignSelf: 'flex-start'

    },
    textUserName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        bottom: 15,

    },
    imagen: {
        alignSelf: 'center',
        height: 68,
        width: 66,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        marginTop: 2
    },
    buttonCambiarFoto: {
        width: '30%',
        height: '65%',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: 'orange',
        left: 20
    },
    textCambiarFoto: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center',
        top: '25%'
        
    },
    input: {
        width: '90%',
        heigh: '30%',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'orange',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 12,
        padding: 10
    
      },
      buttonCerrarSesion: {
        width: '50%',
        height: '20%',
        borderRadius: 100,
        backgroundColor: '#FFC3C3',
        alignSelf: 'center',
        top: 100
        
      },
      textCerrarSesion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'red',
        alignSelf: 'center',
        top: 14

      },
      buttonDesactivarCuenta: {
        alignSelf: 'center',
        top: 110

        
      },
      textDesactivarCuenta: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: 'red',
        textDecorationLine: 'underline'

      },
      buttonEditar: {
        
      },
      textEditar: {
        color: 'gray'
      },
    
  
  });
  
  export default Perfil_Usuario;