import {StatusBar} from 'expo-status-bar';
import React from "react";
import {styles} from "./App.styles";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import {useFonts} from "expo-font";
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
} from "react-native";


// const registration = true;
const registration = false;


export default function App() {

    const [fontsLoaded] = useFonts({
        'Roboto': require('../img/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require('../img/background.png')} style={styles.img}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        {registration ? (
                            <View style={styles.regField}>
                                <RegistrationScreen/>
                            </View>
                        ) : (
                            <View style={styles.regField}>
                                <LoginScreen/>
                            </View>
                        )}
                        <StatusBar style="auto"/>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}


