import React, {useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Keyboard,
    Platform, ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from "react-native";
import {styles} from "./Screens.styles";

const initialState = {
    login: '',
    email: '',
    password: '',
}

const LoginScreen = ({navigation}) => {

    const [state, setState] = useState(initialState);

    const nameHandler = (value) =>
        setState((prevState) => ({
            ...prevState, email: value
        }));
    const passwordHandler = (value) =>
        setState((prevState) => ({
            ...prevState, password: value
        }));

    const onLogin = () => {
        // console.log(state);
        Keyboard.dismiss()
        setState(initialState);
        navigation.navigate("Home")
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require('../../img/background.png')} style={styles.img}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View style={styles.regField}>
                            <View style={styles.regInputs}>
                                <View style={styles.textPosition}>
                                    <Text style={{fontFamily: 'Roboto', fontSize: 30}}>LOGIN</Text>
                                </View>
                                <TextInput
                                    value={state.email}
                                    onChangeText={nameHandler}
                                    placeholder="Email"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={state.password}
                                    onChangeText={passwordHandler}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <Pressable title={"Login"} style={styles.button} onPress={onLogin}>
                                    <Text>L O G I N</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Registration")}><Text>No account? Sign
                                    up</Text></Pressable>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default LoginScreen;