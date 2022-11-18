/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const COLORS = {
  principal: '#FFBC4F',
  blanco: '#FCFCFC',
  negro: '#141414',
  gris: '#72777A',
};

export const styles = StyleSheet.create({
  fondo:{
    flex:1,
    backgroundColor: '#FCFCFC',
    margin : 0,
  },
  backgroundScreen:{
    flex:1,
    backgroundColor: '#FCFCFC',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  // Header App
  bannerHeaderapp:{
    backgroundColor: '#FFBC4F',  //TODO
    height: '15%',
    top: -20,
    width: '100%',
    borderRadius: 35,
    alignItems:'center',
    alignContent:'center',
    textAlign:'center',
    alignSelf:'auto',
  },
  titleHeader: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily:'Poppins-Bold',
    color:'white',
    marginTop:'3%'
  },

});
