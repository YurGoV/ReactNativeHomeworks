import {StatusBar} from 'expo-status-bar';
import React from "react";


import {
    View,
    Text,
} from "react-native";

import {styles} from "./App.styles";


export default function App() {

    return (
        <View style={styles.container}>
            <Text>YAHOO ) HELLO WORLD :)</Text>
            <StatusBar style="auto"/>
        </View>
    );
}


