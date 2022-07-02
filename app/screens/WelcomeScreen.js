import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.background}
        source={require('../assets/background.jpg')
    }
        >
            <View style={styles.logoContainer}>
       <Image source={require('../assets/logo-red.png')} style= {styles.logo}></Image>
       <Text style={styles.tagline}> Sell What You Don't Need</Text>
       </View>
       <View style= {styles.buttonContainer}>
        <AppButton title="login" color='#fc5c65'></AppButton>
        <AppButton title="register" color='#4ecdc4'></AppButton>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    },
    logo:{
          width: 100,
          height: 100,
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})
export default WelcomeScreen;