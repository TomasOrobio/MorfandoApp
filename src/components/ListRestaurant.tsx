import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';


const ListRestaurant = ({ item }) => {

    const { name, rate , id, image} = item
  return (
    <View style={ styles.container }>
      <View>
        {/* {/* //Styles.icon    */}
      </View>
      <View>
        <Text style={ styles.Text }> {name} </Text>
        <Text style={ styles.Description } > {rate} </Text>
        <Text> {id} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    Image:{
        borderRadius: 30,
        width:100,
        height: 100,
        flex: 1,
    },
    Text:{
        fontSize: 20,
    },
    Description:{
        fontSize: 14,
    }



})

export default ListRestaurant;