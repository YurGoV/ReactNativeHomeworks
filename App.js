import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from "react";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
// import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
    View,
    TextInput,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    Alert,
    Button,
    Text,
    ImageBackground,
} from "react-native";

import {styles} from "./App.styles";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";


// const loadFonts = async () => {
//     await Font.loadAsync({
//         "Roboto-Regular": require("./img/fonts/Roboto-Regular.ttf"),
//         "Roboto-Bold": require("./img/fonts/Roboto-Bold.ttf"),
//     });
// };

// const loadFonts = () => {
//     return Font.loadAsync({
//         "Roboto-Regular": require("./img/fonts/Roboto-Regular.ttf"),
//         "Roboto-Bold": require("./img/fonts/Roboto-Bold.ttf"),
//     });
// };



const initialState = {
    login: '',
    email: '',
    password: '',
}

const registration = true;
// const registration = false;


export default function App() {

    const [state, setState] = useState(initialState);
    // const [isReady, setIsReady] = useState(true)

    console.log(Platform.OS);

    const [fontsLoaded] = useFonts({
        'Roboto': require('./img/fonts/Roboto-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    console.log('lll');


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

    // if (!isReady) {
    //     // return <AppLoading startAsync={loadFonts}
    //     //                    onFinish={() => setIsReady(true)}
    //     //                    onError={(err) => console.log(err)}/>
    //     // return <AppLoading/>
    //     setIsReady(true)
    // }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require('./img/background.png')} style={styles.img}>
                    <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        {/*<Text>Open up App.js YAHO-OO // YESS )to start working on your app!</Text>*/}

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

/*export default function App() {

    console.log(Platform.OS);

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [state, setState] = useState(initialState);
    const [isReady, setIsReady] = useState(true)

    const nameHandler = (value) =>
        setState((prevState) => ({
            ...prevState, email: value
        }));
    const passwordHandler = (value) =>
        setState((prevState) => ({
            ...prevState, password: value
        }));

    const onLogin = () => {
        // console.log(evt);
        // Alert.alert("Credentials", `${email} + ${password}`);
        console.log(state);
        // setState({
        //     email: email,
        //     password: password,
        // })

        Keyboard.dismiss()
        setState(initialState);

    };

    if (!isReady) {
        // return <AppLoading startAsync={loadFonts}
        //                    onFinish={() => setIsReady(true)}
        //                    onError={(err) => console.log(err)}/>
        // return <AppLoading/>
        setIsReady(true)
    }
    // let email;
    // let password;
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    {/!*<Text>Open up App.js YAHO-OO // YESS )to start working on your app!</Text>*!/}

                    <TextInput
                        value={state.email}
                        onChangeText={nameHandler}
                        placeholder="Username"
                        style={styles.input}
                    />
                    <TextInput
                        value={state.password}
                        onChangeText={passwordHandler}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <Button title={"Login"} style={styles.input} onPress={onLogin}/>

                    <StatusBar style="auto"/>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}*/


