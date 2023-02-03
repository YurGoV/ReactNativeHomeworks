import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from "react";
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';

import {
    View,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    ImageBackground,
} from "react-native";

import {useRoute} from "./router";



const initialState = {
    login: '',
    email: '',
    password: '',
}





export default function App() {

    const [state, setState] = useState(initialState);
    const routing = useRoute(false)

    console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('./img/fonts/Roboto-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {//todo: why inactive
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <NavigationContainer>
            {routing}

        </NavigationContainer>
    );
}


/*

   <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen name="Registration"
                                  component={RegistrationScreen} options={{
                                      headerShown: false,}}/>
                <MainStack.Screen name="Login"
                                  component={LoginScreen} options={{
                                      headerShown: false,}}/>
                <MainStack.Screen name="Home"
                                  component={Home} options={{
                    headerShown: false,}}/>
            </MainStack.Navigator>

*/
