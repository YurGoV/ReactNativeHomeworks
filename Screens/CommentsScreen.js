import React from "react";

import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";
import {styles} from "./Posts.styles";


const CommentScreen = ({state, loginHandler, nameHandler, passwordHandler, onPress}) => {

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }} >

            <Text>COMMENT SCREEN</Text>
        </View>
    )
};

export default CommentScreen;