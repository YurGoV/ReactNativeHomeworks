import React from "react";


import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";
import {styles} from "./Posts.styles";


const PostsScreen = () => {

    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',

        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image source={require('../img/avatar.png')}/>
                <View style={{
                    justifyContent: 'center',
                    paddingLeft: 20
                }}>

                <Text>Natali Romanova</Text>
                    <Text>example@email.com</Text>

                </View>

            </View>

        </View>
    )
};

export default PostsScreen;