import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
	{
		id: "Uber-X-123",
		title: "Стандарт",
		multiplier: 1,
		image: "https://links.papareact.com/3pn",
	},
	{
		id: "Uber-XL-456",
		title: "Автобус",
		multiplier: 1.2,
		image: "https://links.papareact.com/5w8",
	},
	{
		id: "Uber-LUX-789",
		title: "Люкс",
		multiplier: 1.75,
		image: "https://links.papareact.com/7pf",
	},
];

const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity 
				onPress={() => navigation.navigate('NavigateCard')}
				style={tw`absolute top-3 left-5 p-3 rounded-full`}
				>
					<Icon name="chevron-left" type='fontawesome' /> 
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>Оберіть машину - {travelTimeInformation?.distance?.text}</Text>
			</View>

			<FlatList data={data} keyExtractor={(item) => item.id}
				renderItem={({item:{id, title, multiplier, image}, item}) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						style={tw`flex-row justify-between items-center px-6 ${id === selected?.id && "bg-gray-200"}`}
					>
						<Image
						style={{
							width: 100,
							height: 100,
							resizeMode: "contain",
						}}
						source={{uri: image }}
						/>
						<View style={tw`-ml-6`}>
							<Text style={tw`text-xl font-medium`}>{title}</Text>
							<Text>{travelTimeInformation?.duration?.text}</Text>
						</View>
							<Text style={tw`text-xl`}>

								{new Intl.NumberFormat("uk-uah", {
									style: 'currency',
									currency:'UAH'

								}).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 100))}

							</Text>
					</TouchableOpacity>
				)}
			
			/>

			<View style={tw`mt-auto border-t border-gray-200`}>
				<TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}>
					<Text style = {tw`text-center text-white text-xl`}>Обрати {selected?.title}</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	);
};

export default RideOptionsCard

const styles = StyleSheet.create({})