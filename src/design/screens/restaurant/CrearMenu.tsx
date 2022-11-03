/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Switch, ProgressBarAndroid } from "react-native";
import {COLORS} from '../../theme/appTheme';
import SelectList from 'react-native-dropdown-select-list'

const CrearMenu = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selected, setSelected] = React.useState("");

    const especialidad = [
        {key:'',value:'5%'},
        {key:'',value:'10%'},
        {key:'',value:'15%'},
        {key:'',value:'20%'},
        {key:'',value:'25%'},
        {key:'',value:'50%'},
      ];
    
  return (
    <View style={styles.container}>
        <View>
            <Text style = {styles.textTitle}> Crear Menú </Text>
        </View>

        <View>
            <Text style = {styles.textSubtitle}> 1. Milanesa con Puré </Text>
        </View>
        

        <View style={{flex: 4, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text> 
                <TextInput 
                    style = {styles.input}
                    placeholder = '$'
                    placeholderTextColor={COLORS.negro}
                    keyboardType='numeric'
                />
                <TouchableOpacity style = {styles.buttonIngredientes}>
                    <Text style = {styles.textBoton}>Ingredientes</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
                <Text style = {styles.textDescuento}> DESCUENTO </Text> 
                <SelectList 
                    setSelected={setSelected} 
                    data={especialidad}  
                    search={false} 
                    boxStyles={{width: '90%', height: '25%', alignSelf: 'center', borderColor: COLORS.principal,borderRadius: 10, borderWidth: 2}}
                    inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular', fontSize: 10, textAlign: 'center', left: '100%'}}
                    dropdownitemStyles={{width:'10%', height:'10%'}}
                    dropdownStyles={{ width:'90%', height:'30%', left: 10, borderColor: COLORS.principal, backgroundColor:COLORS.blanco}}
                    placeholder = '%'
                />
                <TouchableOpacity style = {styles.buttonAgregarFoto}>
                    <Text style = {styles.textBoton}>Agregar foto</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{flex: 1}}>
                <Text style = {styles.textPlatoVegano}>Plato Vegano</Text>
                <Switch
                  style = {styles.Switch1}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  /> 
                  <Text style = {styles.textLibreGluten}>Libre de Gluten</Text>
                <Switch
                  style = {styles.Switch2}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>

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


    </View>
  );
}
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 21,
        color: COLORS.negro,
        

    },
    textSubtitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: COLORS.gris,
    },
    textPrecio: {
        color: COLORS.gris,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        margin: 4
    },
    textDescuento: {
        color: COLORS.gris,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        margin: 4
    },
    input: {
        width: '90%',
        height: '6%',
        alignSelf: 'center',
        textAlign: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 10,
    },
    Switch1: {   
        alignSelf: 'center',
        top: 10,
    },
    Switch2: {   
        alignSelf: 'center',
        top: 45,
        
    },
    buttonIngredientes: {
        width: '90%',
        height: '6%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        top: 34,
        
    },
    buttonAgregarFoto: {
        width: '90%',
        height: '6%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        bottom: 70,
    },
    textBoton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: COLORS.principal
    },
    textPlatoVegano: {
        textAlign: 'center',
        top: 6,
        color: COLORS.negro,
    },
    textLibreGluten: {
        textAlign: 'center',
        color: COLORS.negro,
        top: 45,
    },
    barraProgreso: {
        flex: 1,
        alignItems: 'center',
    },

});

export default CrearMenu;