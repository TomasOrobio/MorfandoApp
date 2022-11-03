/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
// import {styles} from '../../theme/appTheme';
// import { ButtonWithTitle } from '../components/ButtonWithTittle';
// import Slider from 'rn-range-slider';
import { COLORS, SIZES } from '../../theme/theme';

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
              {borderColor: cuisines === 1 ? COLORS.primary : COLORS.grey},
              ,
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 1 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 2 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 2 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 3 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 3 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 4 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 4 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 5 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 5 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 6 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 6 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 7 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 7 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 8 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 8 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 9 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 9 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 10 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 10 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 11 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 11 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 12 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 12 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 13 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 13 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 14 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 14 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 15 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 15 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 16 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 16 ? COLORS.primary : COLORS.grey},
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
              {borderColor: cuisines === 17 ? COLORS.primary : COLORS.grey},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 17 ? COLORS.primary : COLORS.grey},
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
    color: COLORS.grey,
    fontWeight: '500',
    fontSize: SIZES.h5,
},
  subtitulo: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontweight: 19900,
  }
});
export default Filtros;
