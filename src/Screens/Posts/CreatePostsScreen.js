import React, {useEffect, useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";

import {useSelector} from "react-redux";

import {styles} from "./Posts.styles";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import axios from "axios";

import {db} from '../../../firebase/config'
import 'firebase/storage';
//???
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";




const initialPictureHeaders = {
    name: '',
    place: '',
}


const CreatePostsScreen = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [pictureUrl, setPictureUrl] = useState(null);
    const [pictureHeaders, setPictureHeaders] = useState(initialPictureHeaders);
    const [location, setLocation] = useState(null);

    const {login, userId} = useSelector((state) => state.auth);

    const storage = getStorage()


    console.log(pictureUrl);

    const placeHandler = (value) => {
        setPictureHeaders((prevState) => ({
            ...prevState, place: value
        }));
    }

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");
        })();

        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }
            // console.log('location get started');
            let locationData = await Location.getCurrentPositionAsync({});
            // console.log('location dada await passed');
            const coords = {
                latitude: locationData.coords.latitude,
                longitude: locationData.coords.longitude,
            };

            // console.log('locationDataa', coords);
            await setLocation(coords);
            console.log('location aaa:', location);

        })();

        if (location) {
            // console.log('location lll:', location);
            axios.get(`http://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=161b71ae33f348868722ad1c9f0e1796`)// todo: refactor out (services folder)
                .then(response => response.data.data)
                .then(mainData => {
                    // console.log('create post mainData', mainData);
                    const {city_name, country_code, weather} = mainData[0]
                    // console.log(city_name, country_code, weather.description);
                    placeHandler(`${city_name}, ${country_code}, ${weather.description}`)
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const nameHandler = (value) =>
        setPictureHeaders((prevState) => ({
            ...prevState, name: value
        }));

    const uploadPhoto = async () => {
        console.log('start');
        const response = await fetch(`${pictureUrl}`)
        const file = await response.blob();

        // console.log(file);

        const uniquePostId = Date.now().toString()// todo: refactoring

        const imageRef = await ref(storage, `test/${uniquePostId}`)
        // const loadImage = await uploadBytes(imageRef, file);
        await uploadBytes(imageRef, file);

        return  await getDownloadURL(imageRef);
    }

    const uploadPost = async() => {
        const uniquePostId = Date.now().toString()// todo: refactoring
        const photo = await uploadPhoto();
        console.log('photo', photo);
        await setDoc(doc(db, "posts", `${uniquePostId}`), {
            photo: photo,
            location: location,
            headers: pictureHeaders,
            login: login,
            userId: userId,
            // test: 'testt'
        });
    }

    const makePost = async () => {

        await uploadPost();

       // const fireBaseUrl = await uploadPhoto();
       //  console.log('fireBaseUrllll', fireBaseUrl);

       /*await navigation.navigate("PostScreen", {
            pictureHeaders,
            location,
            fireBaseUrl: await uploadPhoto(),
        })*/
    }


    return (
        <View style={styles.createPostMain}>
            <View style={styles.createPostPhoto}>
                {!pictureUrl ? (
                    <Camera
                        style={styles.createPostCamera}
                        type={type}
                        ref={(ref) => {
                            setCameraRef(ref);
                        }}
                    >
                        <View style={styles.makePhotoButton}>
                            {!pictureUrl &&// todo twiced pictureUrl
                                <Pressable
                                    onPress={async () => {
                                        if (cameraRef) {
                                            const {uri} = await cameraRef.takePictureAsync();
                                            // console.log(uri);
                                            setPictureUrl(uri);
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
                        <Image style={styles.createPostCamera}
                               source={{uri: pictureUrl}}/>
                    </View>
                )
                }
            </View>
            {!pictureUrl ? (
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
                           onPress={() => setPictureUrl(null)}>
                    <MaterialIcons name="add-a-photo" size={24} color="grey"/>
                </Pressable>
            )
            }
            <TextInput
                onChangeText={nameHandler}
                placeholder="name"
                style={styles.postInput}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable title={"Map"}
                           onPress={() => navigation.navigate("Map", {
                               location,
                           })}>
                    <Ionicons name="location-outline" size={24} color="green"/>
                </Pressable>
                <TextInput
                    onChangeText={placeHandler}
                    placeholder='place'
                    value={pictureHeaders.place}
                    style={styles.postInput}
                />
            </View>

            <Pressable title={"Post"} style={styles.postButton}
                       onPress={makePost}
            >
                <Text>Publish</Text>
            </Pressable>

        </View>
    )
};

export default CreatePostsScreen;

/*
rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if
            request.time < timestamp.date(2023, 3, 14);
    }
}
}
*/
