import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

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
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              }))

            dispatch(setDestination(null));

          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "uk"
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
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
