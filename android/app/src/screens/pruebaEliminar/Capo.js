import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";


const Capo = (props) => {
    return (
      <View style = {styles.container}>
        <View>
        <TouchableOpacity style = {styles.buttonBack} onPress={() => props.navigation.navigate('Login Usuario')}>
          <Text style = {styles.textBack}>Ir a menú</Text>
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
        backgroundColor: 'red',
        width: '50%',
        height: '30%',
        alignSelf: 'center',
        top: 300
      },
      textBack: {
        fontSize: 20,
        textAlign: 'center',
        top: '25%'

      },
    
    });
    
    export default Capo;