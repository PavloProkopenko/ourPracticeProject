import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			{/* Заголовок сторінки */}
			<Text style={tw`text-center py-5 text-xl`}>Куди поїдемо в цей раз?</Text>

			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					{/* Вибір точки призначення з допомогою GooglePlacesAutocomplete */}
					<GooglePlacesAutocomplete
						placeholder="Обрати точку призначення"
						styles={toInputBoxStyles}
						fetchDetails={true}
						enablePoweredByContainer={false}
						returnKeyType={"search"}
						minLenght={2}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description
								})
							);
							// Перехід на екран з вибором варіантів поїздки (RideOptionsCard)
							navigation.navigate('RideOptionsCard');
						}}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: "uk"
						}}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
					/>
				</View>
				{/* Популярні місця (NavFavourites) */}
				<NavFavourites />
			</View>

			<View style={tw`flex-row bg-white justify-evenly py-3 mt-auto border-t border-gray-100`}>
				{/* Кнопка для переходу на екран з вибором варіантів поїздки (Rides) */}
				<TouchableOpacity
					onPress={() => navigation.navigate('RideOptionsCard')} 
					style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 
					rounded-full`}
				>
					<Icon name="car" type='font-awesome' color='white' size={16}/>
					<Text style={tw`text-white text-center`}>Rides</Text>
				</TouchableOpacity>

				{/* Кнопка для переходу на екран з вибором ресторанів (Eats) */}
				<TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
						<Icon 
							name="fast-food-outline"
							type="ionicon"
							color="black"
							size={18}
						/>
						<Text style={tw`text-center`}> Eats </Text>
				</TouchableOpacity>
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
		borderRadius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBotoom: 0,
	},
})
