// import React, { useState } from "react";
// import { View, Switch, StyleSheet, Text, ProgressBarAndroid } from "react-native";
// import {COLORS} from '../../theme/appTheme';
// import SelectList from 'react-native-dropdown-select-list'

// const Horarios = () => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//     const [selected, setSelected] = React.useState("");
  
//     const data = [
//       {key:'',value:'12:00AM'},
//       {key:'',value:'01:00AM'},
//       {key:'',value:'02:00AM'},
//       {key:'',value:'03:00AM'},
//       {key:'',value:'04:00AM'},
//       {key:'',value:'05:00AM'},
//       {key:'',value:'06:00AM'},
//       {key:'',value:'07:00AM'},
//       {key:'',value:'08:00AM'},
//       {key:'',value:'09:00AM'},
//       {key:'',value:'10:00AM'},
//       {key:'',value:'11:00AM'},
//       {key:'',value:'12:00PM'},
//       {key:'',value:'01:00PM'},
//       {key:'',value:'02:00PM'},
//       {key:'',value:'03:00PM'},
//       {key:'',value:'04:00PM'},
//       {key:'',value:'05:00PM'},
//       {key:'',value:'06:00PM'},
//       {key:'',value:'07:00PM'},
//       {key:'',value:'08:00PM'},
//       {key:'',value:'09:00PM'},
//       {key:'',value:'10:00PM'},
//       {key:'',value:'11:00PM'},
//     ];
  
//     return (
//       <View style={styles.container}>

//         <View style={{flex: 1}}>
//             <Text style = {styles.text}>Horarios</Text>
//         </View>

//         {/* DOMINGO */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.gris }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>DOM</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>

//       {/* LUNES */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>LUN</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>

//       {/* MARTES */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>MAR</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>

//       {/* MIÉRCOLES */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>MIE</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>

//         {/* JUEVES */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>JUE</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>


//       {/* VIERNES */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>VIE</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>

//       {/* SÁBADO */}

//         <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <SelectList 
//                   setSelected={setSelected} 
//                   data={data}  
//                   search={false} 
//                   boxStyles={{width: 130,alignSelf: 'center', left: 10}}
//                   inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                   dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                   defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                   />
//             </View>

//             <View style={{flex: 1}}>
//               <SelectList 
//                 setSelected={setSelected} 
//                 data={data}  
//                 search={false} 
//                 boxStyles={{width: 130,alignSelf: 'center', left: 20}}
//                 inputStyles={{color: COLORS.negro, fontFamily: 'Poppins-Regular'}}
//                 dropdownStyles={{ width:'100%', height:'100%',left: 10, borderColor: '#D0D0D0', backgroundColor: COLORS.blanco }}
//                 defaultOption={{  key:'1', value:'12:00PM' }}   //default selected option
//                 />
//             </View>
//             <View style={{flex: 1}}>
//                 <Text style = {styles.textDay}>SAB</Text>
//                 <Switch
//                   style = {styles.Switch}
//                   trackColor={{ false: '#CBCBCB', true: COLORS.gris }}
//                   thumbColor={isEnabled ? COLORS.principal : COLORS.blanco}
//                   onValueChange={toggleSwitch}
//                   value={isEnabled}
//                   />
//             </View>
//         </View>



//         <View style={styles.barraProgreso}>
//             <ProgressBarAndroid
//             styleAttr="Horizontal"
//             indeterminate={false}
//             progress={0.5}
//             color={COLORS.principal}
//             width = {'90%'}
            
//             />
//         </View>     
  
//       </View>
  
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       backgroundColor: COLORS.blanco,
//       flex: 1,
//     },
  
//     Switch: {   
//       alignSelf: 'center',
//       bottom: 10,
//     },
//     text: {
//       height: '30%',
//       width: '20%',
//       fontFamily: 'Poppins-Regular',
//       fontSize: 16,
//       color: COLORS.negro,
//       top: 45,
//       left: 10,
  
//     },
//     textDay: {
//       fontFamily: 'Poppins-Regular',
//       color: COLORS.negro,
//       fontSize: 20,
//       textAlign: 'center',  
//     },
  
//     barraProgreso: {
//       flex: 1,
//       alignItems: 'center',
      
//     },
    
  
//   });
  
//   export default Horarios;


import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import SelectDropdown from "react-native-select-dropdown";
import { FC_RN } from "../../navigation/Navigation.type";
import { StackActions, useNavigation } from "@react-navigation/native";

const Horarios: FC_RN<{uploadFile: undefined}>  = ({navigation, route}) => {
    const [selectedDays, setSelectedDays] = useState<string[]>([])
    const [selectedRanges, setSelectedRanges] = useState<any[]>([])
    const toggleSwitch = (day: string) => {
      if(selectedDays.indexOf(day) === -1){
        setSelectedDays(prevState => prevState.concat([day]))
      }else{
        setSelectedDays((prevState)=>prevState.filter((item) => item !== day))
      }
    }
  
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

    const selectRangeDay = (hour: string, day: string, type: "desde" | "hasta" ) =>  {
      const data = [{
        hour, day,type
      }]
      if(selectedRanges.filter((item) => item.day === day && item.type === type).length === 0){
        let aux = selectedRanges
        aux = aux.concat(data)
        setSelectedRanges(aux)
      }else{
        const aux = selectedRanges
        let ToChange:any = []
        aux.map((item) => {
          if(item.type === type && item.day === day){
            // ToChange = ToChange.concat([item])
          }else{
            ToChange = ToChange.concat([item])
          }
        })
        ToChange = ToChange.concat(data)
        setSelectedRanges(ToChange)
      }
    }
    const nav = useNavigation();
    const navigateToNextScreen = () => {
      let canNavigate = true
      if(selectedDays.length > 0){
        selectedDays.map((itemAux: string) => {
          if(selectedRanges.filter((item) => item.day === itemAux).length !==2){
            canNavigate = false
          }
        })
        if(canNavigate){
          const data = {
            ...route?.params,
            selectedDays: selectedRanges,
          }
          nav.dispatch(StackActions.push("uploadFile", data))
        }else{
          alert("Completa todos los horarios de los dias habilitados indicados")
        }
      }else{
        alert("No has indicado ningun dia disponible")
      }
    }
    return (
      <View style={styles.container}>
          <Text style={{marginLeft:20, marginTop:10,marginBottom:10,fontSize:18, fontWeight:"400", fontFamily:"Poppins-Regular", color:"black"}}>Horarios</Text>

        {/* DOMINGO */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "DOM", "desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "DOM", "hasta")
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
                  thumbColor={selectedDays.indexOf("DOM") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("DOM")}
                  value={selectedDays.indexOf("DOM") !== -1}
                  />
            </View>
        </View>







        {/* LUNES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "LUN", "desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "LUN", "hasta")
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
                  thumbColor={selectedDays.indexOf("LUN") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("LUN")}
                  value={selectedDays.indexOf("LUN") !== -1}
                  />
            </View>
        </View>



        {/* MARTES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "MAR", "desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "MAR", "hasta")
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
                  thumbColor={selectedDays.indexOf("MAR") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("MAR")}
                  value={selectedDays.indexOf("MAR") !== -1}
                  />
            </View>
        </View>


        {/* MIERCOLES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                    selectRangeDay(selectedItem, "MIE", "desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                    selectRangeDay(selectedItem, "MIE", "hasta")
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
                  thumbColor={selectedDays.indexOf("MIE") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("MIE")}
                  value={selectedDays.indexOf("MIE") !== -1}
                  />
            </View>
        </View>

        {/* JUEVES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "JUE","desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "JUE","hasta")
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
                  thumbColor={selectedDays.indexOf("JUE") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("JUE")}
                  value={selectedDays.indexOf("JUE") !== -1}
                  />
            </View>
        </View>

        {/* VIERNES */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "VIE", "desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "VIE","hasta")
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
                  thumbColor={selectedDays.indexOf("VIE") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("VIE")}
                  value={selectedDays.indexOf("VIE") !== -1}
                  />
            </View>
        </View>

        {/* SÁBADO */}

        <View style={{flex: .1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <SelectDropdown
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "SAB","desde")
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
                    data={horario}
                    
                    onSelect={(selectedItem, index) => {
                      selectRangeDay(selectedItem, "SAB","hasta")
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
                  thumbColor={selectedDays.indexOf("SAB") !== -1 ? 'orange' : 'white'}
                  onValueChange={()=>toggleSwitch("SAB")}
                  value={selectedDays.indexOf("SAB") !== -1}
                  />
            </View>
        </View>



        <View style={{flex: .2}}>
            <ProgressBar
            style={styles.barraProgreso}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color={'orange'}
            />
        </View>

        <View style = {{flex: .2}}>
        <TouchableOpacity style = {styles.buttonGuardar} onPress={navigateToNextScreen}>
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
      width: '90%',
      marginTop: '25%'
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