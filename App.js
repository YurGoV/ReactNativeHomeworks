import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from "react";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
    View,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    ImageBackground,
} from "react-native";

import {styles} from "./App.styles";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";


const initialState = {
    login: '',
    email: '',
    password: '',
}

// const registration = true;
const registration = false;


export default function App() {

    const [state, setState] = useState(initialState);

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

    const loginHandler = (value) =>
        setState((prevState) => ({
            ...prevState, login: value
        }));
    const nameHandler = (value) =>
        setState((prevState) => ({
            ...prevState, email: value
        }));
    const passwordHandler = (value) =>
        setState((prevState) => ({
            ...prevState, password: value
        }));


    const onRegistration = () => {
        console.log(state);
        Keyboard.dismiss()
        setState(initialState);
    };

    const onLogin = () => {
        console.log(state);
        Keyboard.dismiss()
        setState(initialState);
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require('./img/background.png')} style={styles.img}>
                    <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        {registration ? (
                            <View style={styles.regField}>
                                <RegistrationScreen
                                    state={state}
                                    loginHandler={loginHandler}
                                    nameHandler={nameHandler}
                                    passwordHandler={passwordHandler}
                                    onPress={onRegistration}
                                />
                            </View>
                        ) : (
                            <View style={styles.regField}>
                                <LoginScreen
                                    state={state}
                                    nameHandler={nameHandler}
                                    passwordHandler={passwordHandler}
                                    onPress={onLogin}
                                />
                            </View>
                        )}
                        <StatusBar style="auto"/>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}
