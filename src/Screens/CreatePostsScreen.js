import React, {useEffect, useState} from "react";

import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";
import {styles} from "./Posts.styles";
import {MaterialIcons} from "@expo/vector-icons";

import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const initialPictureData = {
    name: '',
    place: '',
}

const CreatePostsScreen = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [takenPicture, setTakenPicture] = useState(null);
    const [pictureData, setPictureData] = useState(initialPictureData);
    console.log(takenPicture);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const nameHandler = (value) =>
    setPictureData((prevState) => ({
        ...prevState, name: value
    }));

    const placeHandler = (value) =>
    setPictureData((prevState) => ({
        ...prevState, place: value
    }));

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
                height: 467,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
            }}>
                {!takenPicture ? (
                    <Camera
                        style={{
                            flex: 1,
                            minWidth: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        type={type}
                        ref={(ref) => {
                            setCameraRef(ref);
                        }}
                    >
                        <View style={{
                            alignContent: 'center',
                            backgroundColor: 'white',
                            width: 60,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                        }}>
                            {!takenPicture &&
                                <Pressable
                                    onPress={async () => {
                                        if (cameraRef) {
                                            const {uri} = await cameraRef.takePictureAsync();
                                            console.log(uri);
                                            setTakenPicture(uri);
                                            await MediaLibrary.createAssetAsync(uri);
                                        }
                                    }}
                                    title="TakePicture"
                                >
                                    <MaterialIcons name="add-a-photo" size={24} color="grey"/>
                                </Pressable>
                            }
                        </View>
                    </Camera>
                ) : (
                    <View>
                        <Image style={{
                            flex: 1,
                            // alignSelf: "flex-end",
                            // marginTop: 'auto',
                            minWidth: '100%',
                            maxHeight: '100%',
                        }}
                               source={{uri: takenPicture}}/>
                    </View>
                )
                }
            </View>
            {!takenPicture ? (
                <Pressable style={styles.retakePhotoButton}
                           onPress={() => {
                               setType(
                                   type === Camera.Constants.Type.back
                                       ? Camera.Constants.Type.front
                                       : Camera.Constants.Type.back
                               );
                           }}
                           title="Reverse Camera"
                >
                    <MaterialIcons name="flip-camera-android" size={24} color="grey"/>
                </Pressable>
            ) : (
                <Pressable style={styles.retakePhotoButton}
                           onPress={() => setTakenPicture(null)}>
                    <MaterialIcons name="add-a-photo" size={24} color="grey"/>
                </Pressable>
            )
            }

            <TextInput
                onChangeText={nameHandler}
                placeholder="name"
                style={styles.postInput}
            />
            <TextInput
                onChangeText={placeHandler}
                placeholder="place"
                style={styles.postInput}
            />
            <Pressable title={"Register"} style={styles.postButton}
                       onPress={() => alert("This is an upload photo button!")}>
                <Text>Publish</Text>
            </Pressable>
        </View>
    )
};

export default CreatePostsScreen;

