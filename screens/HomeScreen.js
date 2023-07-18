import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-6`}>
        <Image
          style={{
            width: 340,
            height: 200,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://static.wixstatic.com/media/0a1353_ec8003bcfdf247b8a77b9412123e5015~mv2.png",
          }}
        />

        {/* Поле вибору місця походження */}
        <GooglePlacesAutocomplete
          placeholder='З якого ти міста?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // Збереження обраного місця походження у сторінці redux
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            // Збереження обраного місця призначення як null у сторінці redux
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "uk"
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        {/* Компонент з вибором типу транспорту */}
        <NavOptions />

        {/* Компонент зі збереженими улюбленими місцями */}
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
