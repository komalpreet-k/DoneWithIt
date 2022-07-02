import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import AppText from './AppText/AppText';

export default function Card({title, subtitle, image}) {
  return (
    <View style ={styles.card}>
        <Image source={image} style= {styles.image}/>
        <View styles={styles.detailsContainer}>
        <AppText  style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
         </View>
  );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer:{
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subtitle:{
       color: '#4ecdc4' ,
       fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    }
})