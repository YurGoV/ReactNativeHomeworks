import React, {useState} from "react";


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
import {styles} from "../App.styles";


const LoginScreen = ({state, nameHandler, passwordHandler, onPress}) => {


    return (
        <>
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
            <Button title={"Login"} style={styles.input} onPress={onPress}/>


        </>
    )

};

export default LoginScreen;