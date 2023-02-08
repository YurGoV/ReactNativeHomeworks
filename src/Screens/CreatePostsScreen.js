import React from "react";
import {
    View, TextInput,
    Text, Pressable,
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {styles} from "./Posts.styles";


const CreatePostsScreen = () => {

    return (
        <View style={styles.createPostMain}>
            <View style={styles.createPostPhoto}>
                <View style={styles.makePhotoButton}>
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

