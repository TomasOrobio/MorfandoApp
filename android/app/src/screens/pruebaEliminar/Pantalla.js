import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";


const Pantalla = (props) => {
    return (
      <View style = {styles.container}>
        <View>
        <TouchableOpacity style = {styles.buttonBack} onPress={() => props.navigation.navigate('Capo')}>
          <Text style = {styles.textBack}>Fran</Text>
        </TouchableOpacity>
        </View> 

        <View>
        <TouchableOpacity style = {styles.buttonBack1 }onPress={() => Alert.alert('Sos re capo.')} >
          <Text style = {styles.textBack}>botón</Text>
        </TouchableOpacity>
        </View> 
        
      </View>
      
    );
  };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',  
        flex: 1
      },
      buttonBack: {
        backgroundColor: 'lightgreen',
        width: '50%',
        height: '30%',
        alignSelf: 'center',
        top: 60,
        borderRadius: 50
      },
      buttonBack1: {
        backgroundColor: 'lightblue',
        width: '20%',
        height: '30%',
        alignSelf: 'center',
        top: 60,
        borderRadius: 50
      },
      textBack: {
        fontSize: 20,
        textAlign: 'center',
        top: '25%'

      },
    
    });
    
    export default Pantalla;