import React from "react";
import {
    View,
    Text,
    Image, Pressable,
} from "react-native";
import {Ionicons} from '@expo/vector-icons';


import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {MaterialIcons} from "@expo/vector-icons";
import {styles} from "./Posts.styles";

const PostsScreen = ({navigation, route}) => {


    if (!route.params) {
        return (
            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: 'white',
                // width: 300,
                // height: 400,
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
    }


    const {
        location,
        pictureHeaders,
        pictureUrl
    } = route.params;
    //
    // pictureUrl = pictureUrl
    console.log(pictureHeaders, location, pictureUrl);
    // console.log(route);

    console.log(route.params);


    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
            // width: 300,
            // height: 400,
            // borderWidth: 1,

        }}>
            <View style={{// owner photo
                flexDirection: 'row',
                paddingBottom: 10,
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


            <View style={{//post box
                flex: 1,
                flexDirection: 'row',
                // padding: 3,
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                // width: '95wv',
                maxHeight: 255,
                maxWidth: '100%',
                borderWidth: 1,// todo: remove

            }}>
                <Image style={{
                    // flex: 1,
                    // alignSelf: "flex-end",
                    // marginTop: 'auto',
                    minWidth: 187,
                    maxHeight: 250,
                    borderRadius: 8
                }}
                       source={{uri: pictureUrl}}/>
                <View style={{
                    flex: 1,
                    // flexDirection: 'row',
                    padding: 20,
                    backgroundColor: 'white',
                    // alignItems: 'space-between',
                    justifyContent: 'space-between',
                    // textAlign: 'start'
                    // width: 150,
                    // height: 200,
                }}>

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

                    <Text style={{color: 'grey'}}><Ionicons name="chatbubble-outline" size={24} color="grey"/> 0</Text>

                </View>
            </View>


        </View>
    )
};

export default PostsScreen;