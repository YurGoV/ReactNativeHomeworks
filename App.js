import React, {useState} from "react";
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";

import {
    Platform,
} from "react-native";

import {useRoute} from "./router";


export default function App() {

    const [authState, setAuthState] = useState(false);


    const routing = useRoute(authState, setAuthState)

    console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('./img/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <NavigationContainer>
            {routing}

        </NavigationContainer>
    );
}

