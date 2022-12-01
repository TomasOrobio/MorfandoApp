import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Switch, ScrollView } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import {COLORS} from '../../theme/appTheme';

const CrearMenu = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selected, setSelected] = React.useState("");
    
  return (
    <View style={styles.container}>
        <View style={{flex: .1}}>
            <Text style = {styles.textTitle}> Crear Menú </Text>
        </View>

        <ScrollView style={{flex: 1}}>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonIngredientes}>
                        <Text style = {styles.textBoton}>Ingredientes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <Text style = {styles.textDescuento}> DESCUENTO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Descuento (%)'
                            placeholderTextColor={COLORS.negro}
                            keyboardType='numeric'
                    />
                    <TouchableOpacity style = {styles.buttonAgregarFoto}>
                        <Text style = {styles.textBoton}>Agregar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: .8}}>
                    <Text style = {styles.textPlatoVegano}> Plato Vegano </Text>
                    <Switch
                        style = {styles.Switch1}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                        thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        </ScrollView>
        


        <View style={{flex: .2}}>
            <ProgressBar
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.85}
            color={COLORS.principal}
            />



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
        flex: 1,
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 21,
        color: COLORS.negro,
        margin: 4
    },
    textComida: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: COLORS.gris,
        marginTop: 15,
        left: '1%'
    },
    textPrecio: {
        color: COLORS.gris,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%'
        
    },
    textDescuento: {
        color: COLORS.gris,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%'
    },
    input: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 12,
        textAlign: 'center'
    },
    Switch1: {   
        alignSelf: 'center',
        top: 10,
    },
    Switch2: {   
        alignSelf: 'center',
        top: 10,
        
    },
    buttonIngredientes: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        top: 5,
        
    },
    buttonAgregarFoto: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 10,
        top: 5
    },
    textBoton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: COLORS.principal,
        top: 8
    },
    textPlatoVegano: {
        textAlign: 'center',
        top: 6,
        color: COLORS.negro,
    },
    textLibreGluten: {
        textAlign: 'center',
        color: COLORS.negro,
        top: 10,
    },
    barraProgreso: {
        top: 10,
        width: '90%',
        alignSelf: 'center',
    },
    buttonGuardar: {
        width: '40%',
        height: '30%',
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

export default CrearMenu;