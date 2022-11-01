import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ButtonWithTitle } from '../../components/ButtonWithTittle';
import { styles } from '../../theme/appTheme';


const HomeScreen = () => {
    return (
        <View style={appstyles.container}>
            <Text style={appstyles.title}> Iniciar Sesion </Text>

            {/* InputData */}
            <View>
                {/* Email */}
                <View>
                    <TextInput
                        placeholder='Email'
                        style={appstyles.input}
                    />
                </View>
                {/* Password */}
                <View>
                    <TextInput
                        placeholder='Contrasena'
                        style={appstyles.input}
                    />
                </View>
                {/* Iniciar Sesion */}
                <View style={appstyles.ViewButton}>
                    <TouchableHighlight style={appstyles.button}>
                        <Text style={appstyles.buttontext}> Iniciar Sesion </Text>
                    </TouchableHighlight>
                </View> 

            </View>

            {/* No tienes cuenta */}
            <View style={appstyles.Account}>
                <Text style={appstyles.TextAccount}> No tienes una cuenta?</Text> 
                <Text style={appstyles.ButtonAccount} > Registrate</Text> 
            </View>
        </View>
    )
}

const appstyles = StyleSheet.create({
    container: {
        padding: 25,
    },
    title: {
        fontSize: 30,
        marginTop: 200,
        fontFamily:"Poppins-Bold",
    },
    input: {
        height: 40,
        borderWidth: 2,
        marginBottom: 20,
        paddingLeft: 20,
        marginTop: 20,
        borderRadius: 42,
        borderColor:'orange',
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttontext: {
        fontSize: 20,
        color: 'white',
        textAlign:'center',
    },
    ViewButton:{
        marginLeft:90,
    },
    Account:{
        flexDirection:'row',
        alignContent:'center',
        textAlign:'center',
        marginLeft: '27%',
    },
    TextAccount:{
        fontSize:12,
        marginTop: 10,
    },
    ButtonAccount:{
        color:'blue',
        fontSize:12,
        marginTop: 10,
    }
});

export default HomeScreen;