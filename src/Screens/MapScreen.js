import React from "react";

import {
    View,
} from "react-native";
import {styles} from "./Posts.styles";

import MapView, {Marker} from "react-native-maps";


const MapScreen = ({navigation, route}) => {

    // console.log('rp: ', route.params);
    const {latitude, longitude} = route.params.location
    // console.log('live data: ', latitude, longitude);


    return (
        <View style={styles.mapMain}>

            <MapView
                style={styles.mapView}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

                mapType="standard"
                minZoomLevel={15}
                // onMapReady={() => console.log("Map is ready")}
                // onRegionChange={() => console.log("Region change")}
            >
                <Marker
                    title="I am here"
                    coordinate={{latitude: latitude, longitude: longitude}}
                    description='Hello'
                />
            </MapView>
        </View>
    )
};

export default MapScreen;