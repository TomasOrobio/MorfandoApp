/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { styles } from '../../theme/appTheme';


const Favoritos = () => {
    return (
      <View style={style.backgroundScreen}>
            {/* HeaderOrangeBar */}
            <View style={style.bannerHeaderapp}>
                <Text style={style.titleHeader}> Favoritos  </Text>
            </View>

            {/* Favoritos List */}
            <View style={ stylesApp.nameContainer }>
                                   {/* {/* //Styles.icon    */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                        
                    </View>
            </View>

            <View style={ stylesApp.nameContainer }>
                                  {/* {/* //Styles.icon    */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Rate Icon acaa</Text>
                    </View>
            </View>

            <View style={ stylesApp.nameContainer }>
                                    {/* {/* //Styles.icon    */}
                    <View >
                        <Text style={ stylesApp.titleName }> Nombre restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Adress restaurante </Text>
                        <Text style={ stylesApp.descriptionName }> Rate Icon acaa</Text>
                    </View>
            </View>

      </View>
    );
  };

const stylesApp = StyleSheet.create({
  nameContainer:{
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
  },
  image:{
    marginRight:15,
    borderRadius: 30,
    width:100,
    height: 100,
  },
  titleName:{
    marginTop:7,
    fontSize:20,
    fontFamily:'Poppins-Medium',
  },
  descriptionName:{
    fontFamily:'Poppins-Regular',
    marginTop:7,
    fontSize:14,
  },
  icon:{ //CHECK
    flex:1,
    width:45,
    height:45,
    alignSelf:'center',
    textAlign:'center',
    marginTop:10,
  }

});

export default Favoritos;