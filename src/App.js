import React from "react";
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import Home from "./Screens/Main/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {
    Platform,
} from "react-native";
import MapScreen from "./Screens/Additionall/MapScreen";
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {useRoute} from "./router";


export default function App() {
const routing = useRoute(true)
    // console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('../img/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const MainStack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                {routing}
            </NavigationContainer>
        </Provider>
    );
}

/*
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
    <MainStack.Screen name="Map"
                      component={MapScreen} options={{
        headerShown: false,
    }}/>
</MainStack.Navigator>*/
