import React from "react";

import {
    View, TextInput,
    Text, Pressable, Image, Dimensions,
} from "react-native";
import {styles} from "./Posts.styles";

import MapView, { Marker } from "react-native-maps";


const MapScreen = ({navigation, route}) => {

    console.log('rp: ', route.params);
    const {latitude, longitude} = route.params.location
    console.log(latitude, longitude);

    const tempLocation = {"latitude": 48.4606115, "longitude": 35.0326543}

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }}>

            {/*<Text>MAP SCREEN</Text>*/}
            <MapView
                // style={styles.mapStyle}
                style={{width: '80%',
                    height: '70%',}}
                region={{
                    latitude: 48.4606115,
                    longitude: 35.0326543,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType="standard"
                minZoomLevel = {15}
                onMapReady={() => console.log("Map is ready")}
                onRegionChange={() => console.log("Region change")}
            >
                <Marker
                    title="I am here"
                    coordinate={{ latitude: 48.4606115, longitude: 35.0326543 }}
                    description='Hello'
                />
            </MapView>
        </View>
    )
};

export default MapScreen;