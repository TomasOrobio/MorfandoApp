/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#FFFFFF',
};

export const styles = StyleSheet.create({
  fondo:{
    flex:1,
    backgroundColor: '#FCFCFC',
    margin : 5,
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
    height: '10%',
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
