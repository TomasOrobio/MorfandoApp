import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, ProgressBarAndroid } from "react-native";
import {COLORS} from '../../theme/appTheme';
import SelectList from 'react-native-dropdown-select-list'

const Horarios = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selected, setSelected] = React.useState("");
  
    const data = [
      {key:'',value:'12:00AM'},
      {key:'',value:'01:00AM'},
      {key:'',value:'02:00AM'},
      {key:'',value:'03:00AM'},
      {key:'',value:'04:00AM'},
      {key:'',value:'05:00AM'},
      {key:'',value:'06:00AM'},
      {key:'',value:'07:00AM'},
      {key:'',value:'08:00AM'},
      {key:'',value:'09:00AM'},
      {key:'',value:'10:00AM'},
      {key:'',value:'11:00AM'},
      {key:'',value:'12:00PM'},
      {key:'',value:'01:00PM'},
      {key:'',value:'02:00PM'},
      {key:'',value:'03:00PM'},
      {key:'',value:'04:00PM'},
      {key:'',value:'05:00PM'},
      {key:'',value:'06:00PM'},
      {key:'',value:'07:00PM'},
      {key:'',value:'08:00PM'},
      {key:'',value:'09:00PM'},
      {key:'',value:'10:00PM'},
      {key:'',value:'11:00PM'},
    ];
  
    return (
      <View style={styles.container}>

        <View style={{flex: 1}}>
            <Text style = {styles.text}>Horarios</Text>
        </View>

        {/* DOMINGO */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.gris }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>DOM</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

      {/* LUNES */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>LUN</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

      {/* MARTES */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>MAR</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

      {/* MIÉRCOLES */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>MIE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

        {/* JUEVES */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>JUE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>


      {/* VIERNES */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>

            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>VIE</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>

      {/* SÁBADO */}

        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <SelectList 
                  setSelected={setSelected} 
                  data={data}  
                  search={false} 
                  boxStyles={{width: 130,alignSelf: 'center', left: 10}}
                  inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                  dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                  defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                  />
            </View>

            <View style={{flex: 1}}>
              <SelectList 
                setSelected={setSelected} 
                data={data}  
                search={false} 
                boxStyles={{width: 130,alignSelf: 'center', left: 20}}
                inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
                dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
                defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
                />
            </View>
            <View style={{flex: 1}}>
                <Text style = {styles.textDay}>SAB</Text>
                <Switch
                  style = {styles.Switch}
                  trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
                  thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
            </View>
        </View>



        <View style={styles.barraProgreso}>
            <ProgressBarAndroid
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
      backgroundColor: COLORS.blanco,
      flex: 1,
    },
  
    Switch: {   
      alignSelf: 'center',
      bottom: 10,
    },
    text: {
      height: '30%',
      width: '20%',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: COLORS.negro,
      top: 45,
      left: 10,
  
    },
    textDay: {
      fontFamily: 'Poppins-Regular',
      color: COLORS.negro,
      fontSize: 20,
      textAlign: 'center',  
    },
  
    barraProgreso: {
      flex: 1,
      alignItems: 'center',
      
    },
    
  
  });
  
  export default Horarios;