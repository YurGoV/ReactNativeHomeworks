import React, {useEffect, useState} from "react";
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

import {onAuthStateChanged} from "firebase/auth";


import {auth} from '../firebase/config'


export default function App() {
    const [iasReady, setIasReady] = useState(false);
    const [user, setUser] = useState(null);

    // console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('../img/fonts/Roboto-Regular.ttf'),
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
            setUser(uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });


    if (!fontsLoaded) {
        return null;
    }

    console.log('uuu', user);
    const routing = useRoute(user);


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
