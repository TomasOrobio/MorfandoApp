/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';
import ListRestaurant from '../../components/ListRestaurant';
import { SearchBar } from '../../components/SearchBar';


const HomeScreen = () => {

    const restaurants = [
        {
            name: 'Restaurante n1',
            rate: '5 estrellas',
            id: '001',
        },
        {
            name: 'Restaurante n2',
            rate: '5 estrellas',
            id: '002',
        },
        {
            name: 'Restaurante n3',
            rate: '5 estrellas',
            id: '003',
        },
        {
            name: 'Restaurante n4',
            rate: '5 estrellas',
            id: '004',
        },
        {
            name: 'Restaurante n5',
            rate: '5 estrellas',
            id: '005',
        },
        {
            name: 'Restaurante n6',
            rate: '5 estrellas',
            id: '006',
        },
        {
            name: 'Restaurante n7',
            rate: '5 estrellas',
            id: '007',
        },
        {
            name: 'Restaurante n8',
            rate: '5 estrellas',
            id: '008',
        },
        {
            name: 'Restaurante n9',
            rate: '5 estrellas',
            id: '009',
        },
        {
            name: 'Restaurante n10',
            rate: '5 estrellas',
            id: '010',
        },
    ]

    return (
        <View style={styles.fondo}>

            {/* HeaderOrangeBar */}
            <View style={styles.BannerHeaderapp}>
                <Text style={styles.text}> Pedro Moran 3453, Buenos Aires</Text>
            </View>

            {/* SearchBar */}
            <View style={appstyles.SearchBarView}>
                <View>
                    <Button title="Filtrar" />
                </View>
                <SearchBar 
                    style={appstyles.InputTextView} 
                    onTextChange={undefined}>
                        
                    </SearchBar>
            </View>
            {/* Fin SearchBar */}


            <View style={appstyles.NavRestaurant}>
            <FlatList 
                data={ restaurants }  
                renderItem={ ({item, index}) => <ListRestaurant item={item} /> } 
                keyExtractor={ (item) => item.id  }       
                ListHeaderComponent = { () => <Text style={{ fontWeight: 'bold', fontSize:20, }}> Cerca de ti</Text> }      
                ItemSeparatorComponent = { () => <Text style={{ marginBottom: 10, }}></Text> }
            />
            </View>




        </View>

    );
};

export default HomeScreen;


const appstyles = StyleSheet.create({
    SearchBarView: {
        marginTop: 15,
        flexDirection:'row',
        backgroundColor: '#FCFCFC',
        fontSize: 20,
        height: '50',
    },
    Button: {
        color: 'black',
    },
    Title:{
        fontSize: 24,
        padding: 5
    },
    NavRestaurant:{
        flexDirection:'row',
        height: '90%',
        margin: 20,
        marginTop: 15,
    },
    InputTextView:{
        marginTop: 5,
        flexDirection:'row',
        backgroundColor:'#FCFCFC',
        height: 30,
        width: '80%',
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 0.5,
    },
    TextSearchBar:{
        marginTop:6,
        marginLeft: 15,
        fontSize:14,
    }
});