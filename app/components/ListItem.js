
import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText/AppText';

export default function ListItem({title, subTitle, image}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image}  />
    <View>
        <AppText style={styles.title}>{title} </AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500",
    }, 
    subtitle:{
        color: '#6e6969'
    }
})