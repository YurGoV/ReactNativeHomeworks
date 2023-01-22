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
    Button,
} from "react-native";

import {styles} from "./App.styles";


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

export default function App() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isReady, setIsReady] = useState(false)

    const nameHandler = (text) => setName(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Credentials", `${name} + ${password}`);
    };

    if (!isReady) {
        return <AppLoading startAsync={loadFonts}
                           onFinish={() => setIsReady(true)}
                           onError={(err) => console.log(err)}/>
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    {/*<Text>Open up App.js YAHO-OO // YESS )to start working on your app!</Text>*/}

                    <TextInput
                        value={name}
                        onChangeText={nameHandler}
                        placeholder="Username"
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
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
}


