import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      
    <View style={styles.container}>
       <HomeScreen />
    </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    text: {
      color:"blue"
    }
  },
});
