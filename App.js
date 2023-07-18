import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Підключаємо Redux store
import HomeScreen from './screens/HomeScreen'; // Екран домашньої сторінки
import MapScreen from './screens/MapScreen'; // Екран з картою
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
     // Підключаємо Redux провайдер 
    <Provider store={store}>
      <NavigationContainer>  
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ {flex: 1} }
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            >
            <Stack.Navigator>
              <Stack.Screen 
                name='HomeScreen' // Екран домашньої сторінки 
                component={HomeScreen} // Компонент для HomeScreen 
                options={{
                  headerShown: false, // Приховуємо заголовок навігації 
                }}
              />
              <Stack.Screen 
                name='MapScreen' // Екран з картою 
                component={MapScreen} // Компонент для MapScreen 
                options={{
                  headerShown: false, // Приховуємо заголовок навігації 
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
      <StatusBar style="auto" />  
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    text: {
      color:"blue" // Стилі для тексту
    }
  },
});
