import {StatusBar} from 'expo-status-bar';
import React, {useState} from "react";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
// import AppLoading from 'expo-app-loading';

import {
    View,
    TextInput,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    Alert,
    Button, Text,
} from "react-native";

import {styles} from "./App.styles";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";


const loadFonts = async () => {
    await Font.loadAsync({
        "Roboto-Regular": require("./img/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./img/fonts/Roboto-Bold.ttf"),
    });
};

// const loadFonts = () => {
//     return Font.loadAsync({
//         "Roboto-Regular": require("./img/fonts/Roboto-Regular.ttf"),
//         "Roboto-Bold": require("./img/fonts/Roboto-Bold.ttf"),
//     });
// };

const initialState = {
    email: '',
    password: '',
}

const registration = true;
// const registration = false;


export default function App() {

    console.log(Platform.OS);

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
        console.log(state);
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

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    {/*<Text>Open up App.js YAHO-OO // YESS )to start working on your app!</Text>*/}

                    {registration ? (
                        <>
                            <Text>REGISTRATION SCREEN</Text>
                            <RegistrationScreen
                                state={state}
                                nameHandler={nameHandler}
                                passwordHandler={passwordHandler}
                                onPress={onLogin}
                            />
                        </>
                    ) : (
                        <>
                            <Text>LOGIN SCREEN</Text>
                            <LoginScreen
                                state={state}
                                nameHandler={nameHandler}
                                passwordHandler={passwordHandler}
                                onPress={onLogin}
                            />
                        </>
                    )}
                    <StatusBar style="auto"/>
                </KeyboardAvoidingView>
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


