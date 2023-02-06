import React from "react";
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {
    Platform,
} from "react-native";

// import {useRoute} from "./router.js";


export default function App() {

    // const routing = useRoute()

    console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('../img/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Registration">
                <MainStack.Screen name="Registration"
                                  component={RegistrationScreen} options={{
                    headerShown: false,
                }}/>
                <MainStack.Screen name="Login"
                                  component={LoginScreen} options={{
                    headerShown: false,
                }}/>
                <MainStack.Screen name="Home"
                                  component={Home} options={{
                    headerShown: false,
                }}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}


/*
return (
    <NavigationContainer>
        {routing}
    </NavigationContainer>
);*/
