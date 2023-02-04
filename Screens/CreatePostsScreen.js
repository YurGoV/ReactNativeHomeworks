import React from "react";

import {
    View, TextInput,
    Text, Pressable,
} from "react-native";
import {styles} from "./Posts.styles";
import {MaterialIcons} from "@expo/vector-icons";


const CreatePostsScreen = () => {

    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: '#F6F6F6',
                width: 350,
                height: 250,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    alignContent: 'center',
                    backgroundColor: 'white',
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                }}>
                    <Pressable
                        onPress={() => alert("This is a pick photo button!")}
                        title="LogOut"
                    >
                        <MaterialIcons name="add-a-photo" size={24} color="grey"/>
                    </Pressable>

                </View>


            </View>
            <Text>Upload photo</Text>


            <TextInput
                // onChangeText={ ... }
                placeholder="name"
                style={styles.postInput}
            />
            <TextInput
                // onChangeText={passwordHandler}
                placeholder="place"
                style={styles.postInput}
            />
            <Pressable title={"Register"} style={styles.postButton} onPress={() => alert("This is an upload photo button!")}>
                <Text>Publish</Text>
            </Pressable>
        </View>
    )
};

export default CreatePostsScreen;

