import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, ProgressBarAndroid, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const Horarios = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    const horario = [
      '12:00AM',
      '01:00AM',
      '02:00AM',
      '03:00AM',
      '04:00AM',
      '05:00AM',
      '06:00AM',
      '08:00AM',
      '09:00AM',
      '10:00AM',
      '11:00AM',
      '12:00PM',
      '01:00PM',
      '02:00PM',
      '03:00PM',
      '04:00PM',
      '05:00PM',
      '06:00PM',
      '08:00PM',
      '09:00PM',
      '10:00PM',
      '11:00PM',        
    ]
  
    return (
      <View style={styles.container}>

        {/* DOMINGO */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>DOM</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>







        {/* LUNES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>LUN</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>



        {/* MARTES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>MAR</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>


        {/* MIERCOLES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>MIE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

        {/* JUEVES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>JUE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

        {/* VIERNES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>VIE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

        {/* SÁBADO */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            <View style={{flex: 1}}>
            <SelectDropdown
                    style = {styles.dropDown1}
                    data={horario}
                    
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
            </View>

            
            <View style={{flex: .5}}>
                <Text style = {styles.textDay}>SAB</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: 'gray' }}
                  thumbColor={isEnabled ? 'orange' : 'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>



        <View style={{flex: .2}}>
            <ProgressBarAndroid
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={'orange'}
            width = {'90%'}
            marginTop = {'25%'}
            />
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonGuardar} onPress={() => props.navigation.navigate('Subir Fotos')}>
            <Text style = {styles.textGuardar}>Siguiente</Text>
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
    
    Switch: {   
      alignSelf: 'center',
      bottom: 5,
    },
    textTitle: {
      height: '40%',
      width: '20%',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      color: 'black',
      left: 10,
  
    },
    textDay: {
      fontFamily: 'Poppins-Regular',
      color: 'black',
      fontSize: 20,
      textAlign: 'center',  
    },
  
    barraProgreso: {
      flex: 1,
      alignSelf: 'center',
    },
    buttonGuardar: {
      width: '40%',
      height: '40%',
      color: 'black',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
      top: 40,
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
      height: '80%',
      width: '95%',
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      left: 10
    },
    dropdown1BtnTxtStyle: {
      color: 'gray',
      textAlign: 'center',
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
  
  export default Horarios;