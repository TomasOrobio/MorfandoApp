import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Switch,Alert, ProgressBarAndroid, ScrollView } from "react-native";


const CrearMenu = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
  return (
    <View style={styles.container}>
        
        <ScrollView style={{flex: 1}}>

        <View>
            <Text style = {styles.textComida}> 1. Milanesa con Puré </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Text style = {styles.textPrecio}> PRECIO </Text>
                    <TextInput 
                            style = {styles.input}
                            placeholder = 'Precio ($)'
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
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
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
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
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
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
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
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
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
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
                            placeholderTextColor={'black'}
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
                            placeholderTextColor={'black'}
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
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style = {styles.textLibreGluten}> Libre de Gluten </Text>
                    <Switch
                        style = {styles.Switch2}
                        trackColor={{ false: '#CBCBCB', true: 'gray' }}
                        thumbColor={isEnabled ? 'orange' : 'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>

        </View>

        </ScrollView>
        


        <View style={{flex: .1}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={1}
            color={'orange'}
            width = {'90%'}
            />
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonGuardar} onPressOut={() => Alert.alert('La configuración se ha guardado exitosamente.')} onPress={() => props.navigation.navigate('Restaurantes')}>
            <Text style = {styles.textGuardar}>Guardar</Text>
            
        </TouchableOpacity>
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
        color: 'black',
        margin: 4
    },
    textComida: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: 'gray',
        marginTop: 15,
        left: '1%',
    },
    textPrecio: {
        color: 'gray',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%',
        height: '20%'
        
    },
    textDescuento: {
        color: 'gray',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 4,
        left: '3%',
        height: '20%'
    },
    input: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        color: 'black',
        borderColor: 'orange',
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
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        top: 5,
        
    },
    buttonAgregarFoto: {
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        top: 5
    },
    textBoton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: 'orange',
        top: 8
    },
    textPlatoVegano: {
        textAlign: 'center',
        top: 6,
        color: 'black',
    },
    textLibreGluten: {
        textAlign: 'center',
        color: 'black',
        top: 10,
    },
    barraProgreso: {
        flex: 1,
        alignSelf: 'center',
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
    buttonBack: {
    width: '15%',
    height: '50%',
    color: 'black',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: 'orange',
    
    },
    textBack: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    },

});

export default CrearMenu;