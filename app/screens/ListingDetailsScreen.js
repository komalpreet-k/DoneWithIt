import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import AppText from '../components/AppText/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/splash.png')}></Image>
        <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale </AppText>
        <AppText style={styles.price}> $200</AppText>
        <View style={styles.userContainer}>
        <ListItem
        images= {require("../assets/splash.png")}
        title= "Komalpreet"
        subTitle="5 Listings"
        />
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer:{
        padding: 20,
    },
    price:{
        color: '#4ecdc4',
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
    },
    useContainer:{
        marginVertical: 40,
    }
})
