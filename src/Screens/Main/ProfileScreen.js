import React from "react";

import {
    View,
    Pressable,
    Image,
    ImageBackground,
} from "react-native";
import {authSignOutUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";
import {styles} from "./Main.styles";

import {MaterialCommunityIcons} from "@expo/vector-icons";


const ProfileScreen = () => {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(authSignOutUser())
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <ImageBackground resizeMode="cover" source={require('../../../img/background.png')} style={styles.img}>
                <View style={styles.regField}>
                    <View style={styles.regInputs}>
                        <View style={styles.avatarPlace}>
                            <Image source={require('../../../img/avatar.png')}/>
                        </View>
                        <Pressable title={"Login"} style={styles.add}
                                   onPress={() => alert("This is a pick photo button!")}>
                            <View>
                                <Image source={require('../../../img/add.png')}/>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={signOut}
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