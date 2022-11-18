import React, { } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'

interface ButtonProps{ 
    width: number | string;
    height: number | string;
    title: string,
 }

const ButtonWithTitle: React.FC<ButtonProps> = ({ width, height, title }) => {
  
        return (
            <TouchableOpacity style={[styles.btn, { width, height } ]} >
                <Text style={{ fontSize: 16, color:'#FFF'}}>{title}</Text>
            </TouchableOpacity>
        )
    
}

const styles = StyleSheet.create({
    btn: { 
        flex: 1,
        display: 'flex',  
        maxHeight: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'orange',
        borderRadius:30,
        alignSelf: 'center',
        marginTop: 20,
    },
    
})

 export { ButtonWithTitle }