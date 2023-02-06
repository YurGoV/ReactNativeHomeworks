import React, {useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Keyboard,
} from "react-native";
import {styles} from "./Screens.styles";

const initialState = {
    login: '',
    email: '',
    password: '',
}

const LoginScreen = () => {

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
        console.log(state);
        Keyboard.dismiss()
        setState(initialState);
    };

    return (
        <View style={styles.regInputs}>

            <View style={styles.textPosition}>
                <Text style={{fontFamily: 'Roboto', fontSize: 30}}>L O G I N</Text>
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
            <Text>Немає акаунта? Зареєструватися</Text>

        </View>
    )

};

export default LoginScreen;