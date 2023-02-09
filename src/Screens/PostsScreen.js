import React from "react";
import {
    View,
    Text,
    Image,
} from "react-native";

const PostsScreen = ({navigation, route}) => {

    // const {
    //     pictureHeaders,
    //
    // } = route.params;
    //
    // console.log(pictureHeaders);
    console.log(route);

    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image source={require('../../img/avatar.png')}/>
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