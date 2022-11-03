/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import ListRestaurant from '../../components/ListRestaurant';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { styles } from '../../theme/appTheme';


const Perfil = () => {

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

            <View>  
                {/* Header */}
                {/* <View style={styles.BannerHeaderapp}>
                    <Text style={styles.BannerTextHeaderapp}> Menu </Text>
                </View> */}

                <View style={ stylesApp.container}>
                    <Text style={ stylesApp.image}> </Text>
                    {/* <Image source={require('../../Users/tomasorobio/Desktop/MorfandoInc/assets/images/prueba.jpg')}> </Image> */}
                </View>

                <View style= {stylesApp.infoContainer}>
                    <Text style={ stylesApp.title }> Dean and Dennys  </Text>
                    <View style={ stylesApp.containerDescription}>
                        <Text style={ stylesApp.text}> Rate  </Text>
                        <Text style={ stylesApp.text}> $$$ </Text>
                        <Text style={ stylesApp.text}> Cocina General </Text>
                    </View>
                </View>

                {/* Share/Adress/Rate */}
                <View style={stylesApp.Sharecontainer}>
                    <IconEntypo style={stylesApp.icon} name='add-user' size={30}/>
                    <IconEntypo style={stylesApp.icon} name='add-user' size={30}/>
                    <IconEntypo style={stylesApp.icon} name='add-user' size={30}/>                    
                </View>
                <View style={stylesApp.NavRestaurant}>
                <FlatList 
                    data={ restaurants }  
                    renderItem={ ({item, index}) => <ListRestaurant item={item} /> } 
                    keyExtractor={ (item) => item.id  }       
                    ListHeaderComponent = { () => <Text style={{ fontWeight: 'bold', fontSize:20, }}> Menu</Text> }      
                    ItemSeparatorComponent = { () => <Text style={{ marginBottom: 10, }}></Text> }
                />
                </View>

            </View>
    );
};

const stylesApp = StyleSheet.create({
    container:{
        width: '100%',
        height: '25%',
        marginTop: 0,
        flexDirection:'row',
    },
    infoContainer:{
        width: '100%',
        height: 80,
        // backgroundColor:'blue',
    },
    image:{
        width:'100%',
        height: '100%',
        backgroundColor:'red',
        flex: 1,
    },
    title:{
        fontSize: 26,
        paddingLeft: 0,
        margin:5,
        fontFamily:"Poppins-Bold",

    },
    text:{
       margin:10,
    },
    containerDescription:{
        width:'100%',
        fontFamily:"Poppins-Regular",
        backgroundColor: 'red',
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        fontSize:18,
    },
    NavRestaurant:{
        flexDirection:'row',
        height: '90%',
        margin: 10,
        marginTop: 15,
    },
    Sharecontainer:{
        flexDirection:'row',
        width:'100%',
        height:'5%',
    },
    icon:{
        flex:1,
        width:45,
        height:45,
        alignSelf:'center',
        textAlign:'center',
        marginTop:10,
    }
}
);

export default Perfil;