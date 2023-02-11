import React from "react";
import {
    View,
    Text,
    Image, Pressable,
} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {styles} from './Posts.styles'


const PostsDefaultScreen = ({navigation, route}) => {


    if (!route.params) {
        return (
            <View style={styles.createPostMain}>
                <View style={{flexDirection: 'row',}}>
                    <Image source={require('../../img/avatar.png')}/>
                    <View style={{justifyContent: 'center', paddingLeft: 20}}>
                        <Text>Natali Romanova</Text>
                        <Text>example@email.com</Text>
                    </View>
                </View>
            </View>
        )
    }


    const {
        location,
        pictureHeaders,
        pictureUrl,
        key
    } = route.params;


    return (
        <View style={styles.postsMain}>
            <View style={styles.postsOwnerSection}>
                <Image source={require('../../img/avatar.png')}/>
                <View style={styles.postsProfileText}>
                    <Text>Natali Romanova</Text>
                    <Text>example@email.com</Text>
                </View>
            </View>

            <View style={styles.postSection}>
                <Image style={styles.postImage}
                       source={{uri: pictureUrl}}/>
                <View style={styles.postText}>
                    <Text style={{paddingBottom: 20}}>{pictureHeaders.name}</Text>
                    <View>
                        <Pressable title={"Map"}
                                   onPress={() => navigation.navigate("Map", {
                                       location,
                                   })}>
                            <Ionicons name="location-outline" size={24} color="green"/>
                            <Text tyle={{paddingBottom: 20}}>{pictureHeaders.place}</Text>
                        </Pressable>
                    </View>
                    <Pressable title={"Comments"}
                               onPress={() => navigation.navigate("Comments", {
                                   location,
                               })}>
                        <Text style={{color: 'grey'}}>
                            <Ionicons name="chatbubble-outline" size={24} color="grey"/> 0
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};

export default PostsDefaultScreen;