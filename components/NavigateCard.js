import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>
			<View style={tw`borde-t border-gray-200 felx-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder="Where to?"
						styles={toInputBoxStyles}
						fetchDetails={true}
						returnKeyType={"search"}
						minLenght={2}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description
								})
							);

							navigation.navigate('RideOptionsCard')
						}}
						enablePoweredByContainer={false}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: "en"
						}}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: "#DDDDDF",
		borderRidius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBotoom: 0,
	},
})