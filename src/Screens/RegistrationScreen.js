import React, {useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Image,
    Keyboard, Platform,
    TouchableWithoutFeedback,
    ImageBackground,
    KeyboardAvoidingView,
} from "react-native";
import {styles} from "./Screens.styles";


const initialState = {
    login: '',
    email: '',
    password: '',
}


const RegistrationScreen = ({navigation}) => {

    const [state, setState] = useState(initialState);

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
                                <View style={styles.avatarPlace}>
                                    <Image source={require('../../img/avatar.png')}/>
                                </View>
                                <Pressable title={"Login"} style={styles.add} onPress={onRegistration}>
                                    <View>
                                        <Image source={require('../../img/add.png')}/>
                                    </View>
                                </Pressable>
                                <View style={styles.textPosition}>
                                    <Text style={{fontFamily: 'Roboto', fontSize: 30}}>REGISTER</Text>
                                </View>
                                <TextInput
                                    value={state.login}
                                    onChangeText={loginHandler}
                                    placeholder="Login"
                                    style={styles.input}
                                />
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
                                <Pressable title={"Register"} style={styles.button} onPress={onRegistration}>
                                    <Text>R E G I S T E R</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Login")}
                                           style={{paddingTop: 10}}><Text>Already have an account?
                                    Sign in</Text></Pressable>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default RegistrationScreen;