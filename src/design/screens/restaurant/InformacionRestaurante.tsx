/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, StyleSheet, Text, TextInput, ProgressBarAndroid, ScrollView } from "react-native";
import {COLORS} from '../../theme/appTheme';
import SelectList from 'react-native-dropdown-select-list';

const InformacionRestaurante = () => {
    const [selected, setSelected] = React.useState("");
  
    const especialidad = [
      {key:'',value:'Pastas'},
      {key:'',value:'Gourmet'},
      {key:'',value:'Fast Food'},
      {key:'',value:'Parrilla'},
      {key:'',value:'Comida China'},
      {key:'',value:'Comida Vegana'},
      {key:'',value:'Desayunos'},      
      {key:'',value:'Pescados y mariscos'},
    ];

    const pais = [
      {key:'',value:'Argentina'},
      {key:'',value:'Brasil'},
      {key:'',value:'Chile'},
      {key:'',value:'Uruguay'},
    ];

    const provincia = [
      {key:'',value:'Buenos Aires'},
      {key:'',value:'Ciudad Autónoma de Buenos Aires'},
      {key:'',value:'Catamarca'},
      {key:'',value:'Chaco'},
      {key:'',value:'Chubut'},
      {key:'',value:'Córdoba'},
      {key:'',value:'Corrientes'},
      {key:'',value:'Entre Ríos'},
      {key:'',value:'Formosa'},
      {key:'',value:'Jujuy'},
      {key:'',value:'La Pampa'},
      {key:'',value:'La Rioja'},
      {key:'',value:'Mendoza'},
      {key:'',value:'Misiones'},
      {key:'',value:'Neuquén'},
      {key:'',value:'Río Negro'},
      {key:'',value:'Salta'},
      {key:'',value:'San Juan'},
      {key:'',value:'San Luis'},
      {key:'',value:'Santa Cruz'},
      {key:'',value:'Santa Fe'},
      {key:'',value:'Tierra del Fuego'},
      {key:'',value:'Tucumán'},
      
    ];

    return (
      <ScrollView style={styles.container}>

        <View style={{flex: 1}}>
            <Text style = {styles.text}>Información Restaurante</Text>
        </View>

        <View style={{flex: 6}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            placeholderTextColor={COLORS.negro}
            />
        

        
            <SelectList 
                setSelected={setSelected} 
                data={especialidad}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0',borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: 20, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                placeholder = 'Especialidad'
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Calle'
            placeholderTextColor={COLORS.negro}
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Número'
            placeholderTextColor={COLORS.negro}
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Barrio'
            placeholderTextColor={COLORS.negro}
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Localidad'
            placeholderTextColor={COLORS.negro}            
            />
        

        
            <SelectList 
                setSelected={setSelected} 
                data={pais}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0' ,borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: 20, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                placeholder = 'País'
            />
        
            <SelectList 
                setSelected={setSelected} 
                data={provincia}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0',borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: 20, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                placeholder = 'Provincia'
            />
        </View>


        <View style={{flex: 1}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={COLORS.principal}
            width = {'90%'}
            />
        </View>     
  
      </ScrollView>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blanco,
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: COLORS.negro,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
               
    },

    text: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: COLORS.negro,        
      marginTop: 20,
      width: '55%',
      height: '20%',
      margin: 18,
      top: 30,
    },
  
    barraProgreso: {
      alignSelf: 'center',
      marginBottom: 60,
      flex: 1
    },
    
  
  });
  
  export default InformacionRestaurante;