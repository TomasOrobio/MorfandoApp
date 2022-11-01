import React from 'react'
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const Gradient = ({children}: Props) => {
  return (
    <View style={stylesApp.container}> 
        {/* { children } */}
        <LinearGradient
        colors={[ '#084F6A','#084F6A','white' ]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x:0.1, y:0.1}}
        end={{ x:0.5, y:0.7}}
        /> 
    </View>
  )
};

const stylesApp = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#084F6A',

    }
});
