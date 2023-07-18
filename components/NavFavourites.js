import React from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import tw from "tailwind-react-native-classnames"
import { Icon } from "react-native-elements"

// Початкові дані для FlatList
const data = [
    {
        id: "123",
        icon: "home",
        location: "Дім",
        destination: "вулиця Генерала Родимцева, Київ, Україна",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Робота",
        destination: "НУБіП, вулиця Героїв Оборони, Київ, Україна",
    },
];

const NavFavourites = () => {
    return (
        // Відображаємо FlatList з даними
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            // Додаємо роздільник між елементами списку
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />}
            // Відображаємо кожен елемент списку
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500 text-xs`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites

const styles = StyleSheet.create({})
