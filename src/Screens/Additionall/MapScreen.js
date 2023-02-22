import React from "react";
import {
    View,
} from "react-native";
import {styles} from "./Additional.styles";
import MapView, {Marker} from "react-native-maps";


const MapScreen = ({route}) => {

    const {latitude, longitude} = route.params.location

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