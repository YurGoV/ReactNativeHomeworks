import React from "react";


import {
    View, TextInput,
    Text, Pressable,
} from "react-native";
import {styles} from "./Screens.styles";


const LoginScreen = ({state, nameHandler, passwordHandler, onPress}) => {


    return (
        <View style={styles.regInputs}>

            <View style={styles.textPosition}>
                <Text>L O G I N</Text>
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
            <Pressable title={"Login"} style={styles.button} onPress={onPress}>
                <Text>L O G I N</Text>
            </Pressable>
            <Text>Немає акаунта? Зареєструватися</Text>

        </View>
    )

};

export default LoginScreen;