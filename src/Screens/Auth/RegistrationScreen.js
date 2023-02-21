import React, {useEffect, useState} from "react";
import {
    View, TextInput,
    Text, Pressable, Image,
    Keyboard, Platform,
    TouchableWithoutFeedback,
    ImageBackground,
    KeyboardAvoidingView,
} from "react-native";

import {authSignUpUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";
import {styles} from "./Auth.styles";
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {MaterialIcons} from "@expo/vector-icons";

const initialState = {
    login: '',
    email: '',
    password: '',
    // avatar: '',
}


const RegistrationScreen = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
    const [makePhoto, setMakePhoto] = useState(null);
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();

    const storage = getStorage()

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();


    }, []);


    const loginHandler = (value) =>
        setState((prevState) => ({
            ...prevState, login: value.trim()
        }));
    const nameHandler = (value) =>
        setState((prevState) => ({
            ...prevState, email: value.trim()
        }));
    const passwordHandler = (value) =>
        setState((prevState) => ({
            ...prevState, password: value
        }));

    const toggleMakePhoto = () => {
        if (!makePhoto) {
            setMakePhoto('camera')
        }
        if (makePhoto === 'camera' || makePhoto === 'user') {
            setMakePhoto(null)// todo userPic?
        }
    }




    const uploadAvatar = async () => {

        const response = await fetch(`${avatarUrl}`)
        const file = await response.blob();
        const uniquePostId = Date.now().toString()// todo: refactoring

        const imageRef = await ref(storage, `avatars/${uniquePostId}`)
        // const loadImage = await uploadBytes(imageRef, file);
        await uploadBytes(imageRef, file);
       return await getDownloadURL(imageRef);

        // console.log('newAvatarUrl', newAvatarUrl)
        // // console.log('settedAvatarUrl', avatarUrl)
        // console.log('settedState', state);

    }


    const onRegistration = async () => {
        // console.log(state);
        if (state.login.length < 3) {// todo: normal check  (inactive button) and notify
            return
        }
        // console.log('avatarUrl', avatarUrl);
        // Keyboard.dismiss();
        // const avatarToProfile = async () => {
        //     if (avatarUrl) {
        //         // await uploadAvatar()
        //         return await uploadAvatar()
        //
        //     }
        //     return '';
        // }

        // console.log('avatarToProfile()', avatarToProfile());

        const ava = await uploadAvatar() ?? '';

        dispatch(authSignUpUser({...state, avatar: ava}));
        setState(initialState);
        setMakePhoto(null)
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require('../../../img/background.png')} style={styles.img}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View style={styles.regField}>
                            <View style={styles.regInputs}>
                                <View style={styles.avatarPlace}>

                                    {!makePhoto &&
                                        <Image style={styles.avatarImage}
                                               source={require('../../../img/fakeAvatar.png')}/>
                                    }
                                    {makePhoto === 'camera' &&
                                        <Camera
                                            style={styles.avatarImage}
                                            type={type}
                                            ref={(ref) => {
                                                setCameraRef(ref);
                                            }}
                                        >
                                            <View style={styles.makePhotoButton}>
                                                {makePhoto &&// todo twiced makePhoto
                                                    <Pressable
                                                        onPress={async () => {
                                                            if (cameraRef) {
                                                                const {uri} = await cameraRef.takePictureAsync();
                                                                setAvatarUrl(uri);
                                                                setMakePhoto('user')
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
                                    }
                                    {makePhoto === 'user' &&
                                        <Image style={styles.avatarImage} source={{uri: avatarUrl}}/>
                                    }
                                </View>
                                <Pressable title={"Login"} style={styles.add} onPress={toggleMakePhoto}>
                                    <View>
                                        <Image source={require('../../../img/add.png')}/>
                                    </View>
                                </Pressable>
                                <View style={styles.textPosition}>
                                    <Text style={{fontFamily: 'Roboto', fontSize: 30}}>REGISTER</Text>
                                </View>
                                <TextInput
                                    value={state.login}
                                    onChangeText={loginHandler}
                                    placeholder="Login"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={state.email}
                                    onChangeText={nameHandler}
                                    placeholder="Email"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={state.password}
                                    onChangeText={passwordHandler}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <Pressable title={"Register"} style={styles.button} onPress={onRegistration}>
                                    <Text>R E G I S T E R</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Login")}><Text>Already have an account?
                                    Sign in</Text></Pressable>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default RegistrationScreen;

/*

{!makePhoto ?? !avatarUrl ? (
    <Image style={styles.avatarImage}
           source={require('../../../img/fakeAvatar.png')}/>
) : (
    <Camera
        style={styles.avatarImage}
        type={type}
        ref={(ref) => {
            setCameraRef(ref);
        }}
    >
        <View style={styles.makePhotoButton}>
            {makePhoto &&// todo twiced makePhoto
                <Pressable
                    onPress={async () => {
                        if (cameraRef) {
                            const {uri} = await cameraRef.takePictureAsync();
                            setAvatarUrl(uri);
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
)}
{avatarUrl && <Image style={styles.avatarImage} source={{uri: avatarUrl}}/>
}
*/
