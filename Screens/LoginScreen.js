import React, {useState} from "react";


import {
    View,
    TextInput,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    Alert,
    Button, Text, Pressable,
} from "react-native";
import {styles} from "./Screens.styles";


const LoginScreen = ({state, nameHandler, passwordHandler, onPress}) => {


    return (
        <View style={styles.regInputs}>
            <Text>L O G I N</Text>

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
            {/*<Button title={"Login"} style={styles.button} onPress={onPress}/>*/}
            <Pressable title={"Login"} style={styles.button} onPress={onPress}>
                <Text>L O G I N</Text>
            </Pressable>
        </View>
    )

};

export default LoginScreen;