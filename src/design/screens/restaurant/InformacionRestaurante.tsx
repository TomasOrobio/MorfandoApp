import React from "react";
import { View, StyleSheet, Text, TextInput, ProgressBarAndroid, ScrollView, TouchableOpacity } from "react-native";
import {COLORS} from '../../theme/appTheme';
import SelectList from 'react-native-dropdown-select-list'

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
      <View style={styles.container}>

        <View style={{flex: .1}}>
            <TouchableOpacity style = {styles.buttonBack}>
              <Text style = {styles.textBack}>BACK</Text>
            </TouchableOpacity>
        </View>

        <View style={{flex: .1}}>
            <Text style = {styles.text}>Información Restaurante</Text>
        </View>

        <ScrollView style={{flex: 1}}>
            <TextInput 
            style = {styles.input}
            placeholder = 'Email'
            placeholderTextColor={COLORS.gris}
            />
        

        
            <SelectList 
                setSelected={setSelected} 
                data={especialidad}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0',borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.gris, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: '5%', borderColor: '#D0D0D0', backgroundColor: COLORS.principal }}
                placeholder = 'Especialidad'
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Calle'
            placeholderTextColor={COLORS.gris}
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Número'
            placeholderTextColor={COLORS.gris}
            keyboardType='numeric'
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Barrio'
            placeholderTextColor={COLORS.gris}
            />
        

        
            <TextInput 
            style = {styles.input}
            placeholder = 'Localidad'
            placeholderTextColor={COLORS.gris}            
            />
        

        
            <SelectList 
                setSelected={setSelected} 
                data={pais}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0' ,borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.gris, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: '5%', borderColor: '#D0D0D0', backgroundColor: COLORS.principal }}
                placeholder = 'País'
            />
        
            <SelectList 
                setSelected={setSelected} 
                data={provincia}  
                search={false} 
                boxStyles={{width: '90%',alignSelf: 'center', marginTop: 15, borderColor: '#D0D0D0',borderRadius: 10, borderWidth: 1}}
                inputStyles={{color: COLORS.gris, fontFamily: 'Poppins-Regular', fontSize: 16, right: 18}}
                dropdownitemStyles={{width:'40%', height:'40%'}}
                dropdownStyles={{ width:'90%', height:'100%',left: '5%', borderColor: '#D0D0D0', backgroundColor: COLORS.principal}}
                placeholder = 'Provincia'
            />
        </ScrollView>


        <View style={{flex: .1}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={COLORS.principal}
            width = {'90%'}
            />
        </View>

        <View style = {{flex: .2}}>
            <TouchableOpacity style = {styles.buttonGuardar}>
                <Text style = {styles.textGuardar}>Guardar</Text>
            </TouchableOpacity>
        </View>     
  
      </View>
  
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
      fontSize: 18,
      color: COLORS.negro,        
      width: '60%',
      height: '40%',
      margin: '5%'
    },
  
    barraProgreso: {
      alignSelf: 'center',
      flex: 1
    },
    buttonGuardar: {
      width: '40%',
      height: '50%',
      color: COLORS.negro,
      borderColor: COLORS.principal,
      borderWidth: 2,
      borderRadius: 100,
      top: 20,
      alignSelf: 'center',
      backgroundColor: COLORS.principal,
    },
    textGuardar: {
      fontFamily: 'Poppins-Medium',
      color: COLORS.blanco,
      textAlign: 'center',
      top: '25%'
      
    },
    buttonBack: {
      width: '15%',
      height: '50%',
      color: COLORS.negro,
      borderColor: COLORS.principal,
      borderWidth: 2,
      borderRadius: 100,
      backgroundColor: COLORS.principal,
      
    },
    textBack: {
      fontFamily: 'Poppins-Medium',
      color: COLORS.negro,
      textAlign: 'center',
    },
    
  
  });
  
  export default InformacionRestaurante;