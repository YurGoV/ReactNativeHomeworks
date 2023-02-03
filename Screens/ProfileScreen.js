import React from "react";

import {
    View, TextInput,
    Text, Pressable, Image, ImageBackground,
} from "react-native";
import {styles} from "./Screens.styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";


const ProfileScreen = ({state, loginHandler, nameHandler, passwordHandler, onPress}) => {

    return (
        <View style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: 'white',
        }}>
            <ImageBackground resizeMode="cover" source={require('../img/background.png')} style={styles.img}>

                <View style={styles.regField}>

                    <View style={styles.regInputs}>

                        <View style={styles.avatarPlace}>
                            <Image source={require('../img/avatar.png')}/>
                        </View>
                        <Pressable title={"Login"} style={styles.add} onPress={() => alert("This is a pick photo button!")}>
                            <View>
                                <Image source={require('../img/add.png')}/>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => alert("This is a logout button!")}
                            title="LogOut"
                            style={styles.profileLogOut}
                        >
                            <MaterialCommunityIcons name="logout" size={24} color="lightgrey"/>
                        </Pressable>


                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

export default ProfileScreen;