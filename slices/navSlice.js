import { createSlice } from "@reduxjs/toolkit";

// Початковий стан
const initialState = {
    origin: null, // Початкова точка
    destination: null, // Кінцева точка
    travelTimeInformation: null, // Інформація про час подорожі
}

// Створюємо Redux slice для управління станом навігації
export const navSlice = createSlice({
    name: "nav", // Назва slice
    initialState, // Початковий стан
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload; // Зміна поля origin в стані на нове значення
        },
        setDestination: (state, action) => {
            state.destination = action.payload; // Зміна поля destination в стані на нове значення
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload; // Зміна поля travelTimeInformation в стані на нове значення
        },
    },
});

// Експортуємо action creators
export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// Селектори - функції для отримання певних даних зі стану
export const selectOrigin = (state) => state.nav.origin; // Селектор для отримання початкової точки
export const selectDestination = (state) => state.nav.destination; // Селектор для отримання кінцевої точки
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; // Селектор для отримання інформації про час подорожі

// Експортуємо редуктор slice
export default navSlice.reducer;
