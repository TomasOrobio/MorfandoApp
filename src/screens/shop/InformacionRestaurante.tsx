import React, { FC } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import SelectDropdown from "react-native-select-dropdown";
import { FC_RN } from "../../navigation/Navigation.type";

const InformacionRestaurante: FC_RN<{schedule: undefined}>  = ({navigation}) => {
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

    return (
      <View style={styles.container}>

        <ScrollView style={{flex: 1}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            placeholderTextColor={'gray'}
            />
              
            <SelectDropdown
              data={especialidad}
              
              onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
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
            placeholderTextColor={'gray'}
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Número'
            placeholderTextColor={'gray'}
            keyboardType='numeric'
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Barrio'
            placeholderTextColor={'gray'}
            />
                
            <TextInput 
            style = {styles.input}
            placeholder = 'Localidad'
            placeholderTextColor={'gray'}            
            />

            <SelectDropdown
              data={pais}
              
              onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
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
              console.log(selectedItem, index)
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
            <TouchableOpacity style = {styles.buttonGuardar} onPress={()=> navigation?.navigate('schedule')}>
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