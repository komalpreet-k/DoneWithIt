import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';

import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
   <MessagesScreen />
  )
}
