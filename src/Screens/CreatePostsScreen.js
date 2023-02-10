import React, {useEffect, useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Image,
} from "react-native";
import {styles} from "./Posts.styles";
import {MaterialIcons} from "@expo/vector-icons";
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const initialPictureHeaders = {
    name: '',
    place: '',
}

import * as Location from "expo-location";
import axios from "axios";


/*

'http://api.weatherbit.io/v2.0/current'
key=161b71ae33f348868722ad1c9f0e1796
 "latitude": 48.458189, "longitude": 35.0306551,
*/

const CreatePostsScreen = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [pictureUrl, setPictureUrl] = useState(null);
    const [pictureHeaders, setPictureHeaders] = useState(initialPictureHeaders);
    const [location, setLocation] = useState(null);
    // const [placeDefault, setPlaceDefault] = useState('place');

    const placeHandler = (value) =>
        setPictureHeaders((prevState) => ({
            ...prevState, place: value
        }));

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");
        })();

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }

            let locationData = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: locationData.coords.latitude,
                longitude: locationData.coords.longitude,
            };

            console.log(locationData);

            setLocation(coords);
        })();

        axios.get('http://api.weatherbit.io/v2.0/current?lat=48.458189&lon=35.0306551&key=161b71ae33f348868722ad1c9f0e1796')
            .then(response =>response.data.data)
            .then(mainData => {
                const {city_name, country_code, weather } = mainData[0]
                console.log(city_name, country_code, weather.description);
                // setPlaceDefault(`${city_name}, ${country_code}, ${weather.description}`)
                placeHandler(`${city_name}, ${country_code}, ${weather.description}`)
            })
            .catch((err) => {
                console.log(err);
            })

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



    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: '#F6F6F6',
                width: 300,
                height: 400,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
            }}>
                {!pictureUrl ? (
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
                            {!pictureUrl &&
                                <Pressable
                                    onPress={async () => {
                                        if (cameraRef) {
                                            const {uri} = await cameraRef.takePictureAsync();
                                            console.log(uri);
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
                        <Image style={{
                            flex: 1,
                            // alignSelf: "flex-end",
                            // marginTop: 'auto',
                            minWidth: '100%',
                            maxHeight: '100%',
                        }}
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
            {/*<Text>// todo {location.latitude}, {location.longitude}</Text>*/}
            <TextInput
                onChangeText={nameHandler}
                placeholder="name"
                style={styles.postInput}
                // value={location.latitude}// todo: to weather
            />

            <TextInput
                onChangeText={placeHandler}
                placeholder='place'
                // value={placeDefault}
                value={pictureHeaders.place}
                style={styles.postInput}
            />
            <Pressable title={"Register"} style={styles.postButton}
                       onPress={() => navigation.navigate("PostScreen", {
                           pictureHeaders,
                           location,
                           pictureUrl,
                       })}
                       // onPress={() => navigation.navigate("PostScreen", {
                       //     pictureHeaders: 'test'
                       // })}
            >
                <Text>Publish</Text>
            </Pressable>

        </View>
    )
};

export default CreatePostsScreen;

