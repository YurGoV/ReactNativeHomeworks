import React from "react";


import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";
import {styles} from "./Screens.styles";


const RegistrationScreen = ({state, loginHandler, nameHandler, passwordHandler, onPress}) => {

    return (
        <View style={styles.regInputs}>

            <View style={styles.avatarPlace}>
                <Image source={require('../img/avatar.png')}/>
            </View>
            <Pressable title={"Login"} style={styles.add} onPress={onPress}>
                <View>
                    <Image source={require('../img/add.png')}/>
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
            <Pressable title={"Register"} style={styles.button} onPress={onPress}>
                <Text>R E G I S T E R</Text>
            </Pressable>
            <Text>Already have an account? Sign in</Text>
        </View>
    )
};

export default RegistrationScreen;