/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
// import {styles} from '../../theme/appTheme';
// import { ButtonWithTitle } from '../components/ButtonWithTittle';
// import Slider from 'rn-range-slider';
import { COLORS } from '../../theme/appTheme';

const Filtros = () => {
  const [cuisines, setCuisines] = useState();
  const [cuisinesComida, setCuisinesComida] = useState();
  const [cuisinesCalificaciones, setCuisinesCalificaciones] = useState();
  const [cuisinesPrecio, setCuisinesPrecio] = useState();
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
              {borderColor: cuisines === 1 ? COLORS.principal : COLORS.gris},
              ,
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 1 ? COLORS.principal : COLORS.gris},
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
              {borderColor: cuisines === 2 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 2 ? COLORS.principal : COLORS.gris},
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
              {borderColor: cuisines === 3 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisines === 3 ? COLORS.principal : COLORS.gris},
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
              setCuisinesComida(4);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesComida === 4 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesComida === 4 ? COLORS.principal : COLORS.gris},
              ]}>
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesComida(5);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesComida === 5 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesComida === 5 ? COLORS.principal : COLORS.gris},
              ]}>
              China
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesComida(6);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesComida === 6 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesComida === 6 ? COLORS.principal : COLORS.gris},
              ]}>
              Mexicana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesComida(7);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesComida === 7 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesComida === 7 ? COLORS.principal : COLORS.gris},
              ]}>
              Italiana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesComida(8);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesComida === 8 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesComida === 8 ? COLORS.principal : COLORS.gris},
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
              setCuisinesCalificaciones(9);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesCalificaciones === 9 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesCalificaciones === 9 ? COLORS.principal : COLORS.gris},
              ]}>
              *
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesCalificaciones(10);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesCalificaciones === 10 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesCalificaciones === 10 ? COLORS.principal : COLORS.gris},
              ]}>
              **
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesCalificaciones(11);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesCalificaciones === 11 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesCalificaciones === 11 ? COLORS.principal : COLORS.gris},
              ]}>
              ***
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesCalificaciones(12);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesCalificaciones === 12 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesCalificaciones === 12 ? COLORS.principal : COLORS.gris},
              ]}>
              ****
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesCalificaciones(13);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesCalificaciones === 13 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesCalificaciones === 13 ? COLORS.principal : COLORS.gris},
              ]}>
              *****
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Tipo de commida*/}
      <View style={stylesScreen.item}>
        <Text style={stylesScreen.subtitulo}>Precio</Text>
        <View style={stylesScreen.row}>
          <TouchableOpacity
            onPress={() => {
              setCuisinesPrecio(14);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesPrecio === 14 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesPrecio === 14 ? COLORS.principal : COLORS.gris},
              ]}>
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesPrecio(15);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesPrecio === 15 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesPrecio === 15 ? COLORS.principal : COLORS.gris},
              ]}>
              $$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesPrecio(16);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesPrecio === 16 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesPrecio === 16 ? COLORS.principal : COLORS.gris},
              ]}>
              $$$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCuisinesPrecio(17);
            }}
            style={[
              stylesScreen.category,
              {borderColor: cuisinesPrecio === 17 ? COLORS.principal : COLORS.gris},
            ]}>
            <Text
              style={[
                stylesScreen.subtitle,
                {color: cuisinesPrecio === 17 ? COLORS.principal : COLORS.gris},
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
    color: COLORS.gris,
    fontWeight: '500',
    fontSize: 12,
},
  subtitulo: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontweight: 19900,
  }
});
export default Filtros;
