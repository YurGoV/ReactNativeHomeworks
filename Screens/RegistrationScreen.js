import React, {useState} from "react";


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
import {styles} from "./Screens.styles";


const RegistrationScreen = ({state, loginHandler, nameHandler, passwordHandler, onPress}) => {

    return (
        <View style={styles.regInputs}>
            <Text>R E G I S T R A T I O N</Text>
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
            <Button title={"Login"} style={styles.input} onPress={onPress}/>
        </View>
    )

};

export default RegistrationScreen;