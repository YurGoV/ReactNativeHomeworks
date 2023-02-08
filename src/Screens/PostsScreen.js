import React from "react";
import {
    View,
    Text,
    Image,
} from "react-native";
import {styles} from "./Posts.styles";

const PostsScreen = () => {

    return (
        <View style={styles.postsMain}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image source={require('../../img/avatar.png')}/>
                <View style={styles.postsProfileText}>
                    <Text>Natali Romanova</Text>
                    <Text>example@email.com</Text>
                </View>
            </View>
        </View>
    )
};

export default PostsScreen;