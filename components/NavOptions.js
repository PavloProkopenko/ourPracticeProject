import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

// Масив з варіантами навігації
const data = [
	{
		id: "123",
		title: "Замовити таксі",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Замовлення їжі",
		image: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			horizontal // Горизонтальний режим перегляду елементів
			keyExtractor={(item) => item.id} // Функція для генерації ключа для елементів списка
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)} // Перехід на вибраний екран при натисканні на плитку
					style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					disabled={!origin} // Вимкнення натискання, якщо не вибрано точку походження (origin)
				>
					<View style={tw`${!origin && "opacity-20"}`}>
						<Image
							style={{ width: 120, height: 120, resizeMode: "contain" }}
							source={{ uri: item.image }} // Зображення плитки
						/>
						<Text style={tw`-mt-1 text-lg font-semibold`}>{item.title}</Text> 
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							type="antdesign" color="white" name="arrowright" /> 
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions
