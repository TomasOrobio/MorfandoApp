import React, { FC, useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import SelectDropdown from "react-native-select-dropdown";
import { FC_RN } from "../../navigation/Navigation.type";
import { StackActions, useNavigation } from "@react-navigation/native";

const InformacionRestaurante: FC_RN<{schedule: undefined}>  = ({navigation}) => {
  const nav = useNavigation();
  const [email, setEmail] = useState("")
  const [tipo, setTipo] = useState("")
  const [calle, setCalle] = useState("")
  const [numero, setNumero] = useState("")
  const [barrio, setBarrio] = useState("")
  const [localidad, setLocalidad] = useState("")
  const [paiss, setPais] = useState("")
  const [provincia, setProvincia] = useState("")
    const especialidad = [
        'Pastas',
        'Gourmet',
        'Fast Food',
        'Parrilla',
        'Comida China',
        'Comida Vegana',
        'Desayunos',      
        'Pescados y mariscos',
    ];

    const pais = [
        'Argentina',
        'Brasil',
        'Chile',
        'Uruguay',
    ];

    const provincias = [
        'Buenos Aires',
        'Ciudad Autónoma de Buenos Aires',
        'Catamarca',
        'Chaco',
        'Chubut',
        'Córdoba',
        'Corrientes',
        'Entre Ríos',
        'Formosa',
        'Jujuy',
        'La Pampa',
        'La Rioja',
        'Mendoza',
        'Misiones',
        'Neuquén',
        'Río Negro',
        'Salta',
        'San Juan',
        'San Luis',
        'Santa Cruz',
        'Santa Fe',
        'Tierra del Fuego',
        'Tucumán',
      ];

      const goToSchedule = () => {
        if(email.length >0 && tipo.length>0 && calle.length >0 && numero.length>0 && barrio.length>0 && localidad.length>0 && paiss.length>0 && provincia.length>0){
          const data = {
            email,tipo,calle,numero,barrio,localidad,paiss,provincia
          }
          nav.dispatch(StackActions.push("schedule", data))
        }else{
          alert("Completa todos los campos")
        }
      }

    return (
      <View style={styles.container}>

        <ScrollView style={{flex: 1}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Nombre del restaurant'
            onChange={(e) => setEmail(e.nativeEvent.text)}
            placeholderTextColor={'gray'}
            />
              
            <SelectDropdown
              data={especialidad}
              
              onSelect={(selectedItem, index) => {
               setTipo(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
              }}
              rowTextForSelection={(item, index) => {
              return item
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              dropdownStyle={styles.dropdown1DropdownStyle}
                        
            />      
        
            <TextInput 
            style = {styles.input}
            placeholder = 'Calle'
            onChange={(e) => setCalle(e.nativeEvent.text)}
            placeholderTextColor={'gray'}
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Número'
            onChange={(e) => setNumero(e.nativeEvent.text)}
            placeholderTextColor={'gray'}
            keyboardType='numeric'
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Barrio'
            onChange={(e) => setBarrio(e.nativeEvent.text)}
            placeholderTextColor={'gray'}
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Localidad'
            onChange={(e) => setLocalidad(e.nativeEvent.text)}
            placeholderTextColor={'gray'}            
            />

            <SelectDropdown
              data={pais}
              
              onSelect={(selectedItem, index) => {
              setPais(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
              }}
              rowTextForSelection={(item, index) => {
              return item
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              dropdownStyle={styles.dropdown1DropdownStyle}
                        
            />

            <SelectDropdown
              data={provincias}
              
              onSelect={(selectedItem, index) => {
              setProvincia(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
              }}
              rowTextForSelection={(item, index) => {
              return item
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              dropdownStyle={styles.dropdown1DropdownStyle}
                        
            />
        
        </ScrollView>


        <View style={{flex: .1}}>
            <ProgressBar
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.25}
            color={'orange'}
            />
        </View>

        <View style = {{flex: .2}}>
            <TouchableOpacity style = {styles.buttonGuardar} onPress={goToSchedule}>
                <Text style = {styles.textGuardar}>Siguiente</Text>
            </TouchableOpacity>
        </View>     
  
      </View>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'gray',
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        textAlign: 'left'
             
    },
      
    barraProgreso: {
		flex: 1,
		alignSelf: 'center',
		width: '90%',
    },
    buttonGuardar: {
      width: '40%',
      height: '50%',
      color: 'black',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
      top: 20,
      alignSelf: 'center',
      backgroundColor: 'orange',
    },
    textGuardar: {
      fontFamily: 'Poppins-Medium',
      color: 'white',
      textAlign: 'center',
      top: '25%'
      
    },
    dropdown1BtnStyle: {
      width: '90%',
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      marginTop: 15
    },
    dropdown1BtnTxtStyle: {
      color: 'gray',
      textAlign: 'left',
      fontFamily: 'Poppins-Regular',
    },
    dropdown1DropdownStyle: {
      backgroundColor: 'white',
    },
    dropdown1RowStyle: { // color del fondo de las opciones
      backgroundColor: 'white', 
      borderBottomColor: 'white',
    }, 
    dropdown1RowTxtStyle: { //color de las letras de las opciones
      color: 'black', 
      textAlign: 'left'},
      divider: {width: 1},
      
  });
  
  export default InformacionRestaurante;