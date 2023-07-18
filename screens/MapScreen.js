import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      {/* Блок з мапою */}
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      {/* Блок з навігаційними карточками */}
      <View style={tw`h-1/2`}>
        {/* Навігатор з двома екранами */}
        <Stack.Navigator>
          {/* Екран для навігації */}
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />

          {/* Екран для вибору опцій поїздки */}
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
