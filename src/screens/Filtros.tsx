/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
// import {styles} from '../../theme/appTheme';
// import { ButtonWithTitle } from '../components/ButtonWithTittle';
// import Slider from 'rn-range-slider';
//import { COLORS, SIZES } from '../../theme/theme';

const Filtros = () => {
  const [cuisines, setCuisines] = useState();
  //      const renderThumb = useCallback(() => <Thumb/>, []);
  //      const renderRail = useCallback(() => <Rail/>, []);
  //      const renderRailSelected = useCallback(() => <RailSelected/>, []);
  //      const renderLabel = useCallback(value => <Label text={value}/>, []);
  //     const renderNotch = useCallback(() => <Notch/>, []);
  //      const handleValueChange = useCallback((low, high) => {
  //    setLow(low);
  //    setHigh(high);
  //  }, []);
  return (
    <View style={stylesScreen.fondo}>
      <View>
        <Text style={stylesScreen.title}>Filtros</Text>
      </View>
      {/* Ordenar por*/}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Ordenar por</Text>
        <View style={stylesScreen.row}>
          <TouchableOpacity
            onPress={() => {
              setCuisines(1);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 1 ? 'orange' : 'gray'},
              ,
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 1 ? 'orange' : 'gray'},
              ]}>
              Calificaciones
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(2);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 2 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 2 ? 'orange' : 'gray'},
              ]}>
              Distancia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(3);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 3 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 3 ? 'orange' : 'gray'},
              ]}>
              $ - $$$$
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Tipo de commida*/}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Tipo de Comida</Text>
        <View style={stylesScreen.row}>
          <TouchableOpacity
            onPress={() => {
              setCuisines(4);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 4 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 4 ? 'orange' : 'gray'},
              ]}>
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(5);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 5 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 5 ? 'orange' : 'gray'},
              ]}>
              China
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(6);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 6 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 6 ? 'orange' : 'gray'},
              ]}>
              Mexicana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(7);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 7 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 7 ? 'orange' : 'gray'},
              ]}>
              Italiana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(8);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 8 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 8 ? 'orange' : 'gray'},
              ]}>
              Peruana
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* distancia */}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Distancia</Text>
        {/* <Slider
            style={styles.slider}
                min={0}
                max={100}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
/> */}
        {/* <RangeSlider
                        min={0}
                        max={100}
                        onChange={(min, max) => console.log(min, max)}
                    /> */}
      </View>

      {/* <View>
            <TwoPointSlider
                values = {[5,9]}
                min = {0}
                max = {20}
                postfix = "Km"
                onValuesChange = {(values) => console.log (values)}
            />
        </View> */}
      {/* Calificaciones */}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Calificaciones</Text>
        <View style={stylesScreen.row}>
          <TouchableOpacity
            onPress={() => {
              setCuisines(9);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 9 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 9 ? 'orange' : 'gray'},
              ]}>
              *
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(10);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 10 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 10 ? 'orange' : 'gray'},
              ]}>
              **
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(11);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 11 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 11 ? 'orange' : 'gray'},
              ]}>
              ***
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(12);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 12 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 12 ? 'orange' : 'gray'},
              ]}>
              ****
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(13);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 13 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 13 ? 'orange' : 'gray'},
              ]}>
              *****
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Tipo de commida*/}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Tipo de Comida</Text>
        <View style={stylesScreen.row}>
          <TouchableOpacity
            onPress={() => {
              setCuisines(14);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 14 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 14 ? 'orange' : 'gray'},
              ]}>
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(15);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 15 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 15 ? 'orange' : 'gray'},
              ]}>
              $$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(16);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 16 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 16 ? 'orange' : 'gray'},
              ]}>
              $$$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisines(17);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisines === 17 ? 'orange' : 'gray'},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 17 ? 'orange' : 'gray'},
              ]}>
              $$$$
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button mt="2" endIcon={<AddIcon size="3" />}>Create Event</Button> */}
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  fondo:{
    flex:1,
    backgroundColor: '#FCFCFC',
    margin : 5,
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: 'black'
  },
  text:{
    color: 'white',
  },
  Button:{

  },
  Headerapp:{
    backgroundColor: '#FFBC4F',
    height: '15%',
    width: '1000%',
    borderRadius: 35,
    top: -20,
    left: -30,
  },
  category: {
    margin : 5,
    borderRadius: 6,
    borderWidth : 1,
    padding : 5,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginVertical : 10,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 14,
},
  subtitulo: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontweight: 19900,
    color: 'black',
    left: 5
  }
});
export default Filtros;
