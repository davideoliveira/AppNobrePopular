import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation/>
    </NavigationContainer>
  );
}


