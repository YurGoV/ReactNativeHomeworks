import React from "react";

import {
    View, Text,
} from "react-native";


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