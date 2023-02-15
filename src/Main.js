import React, {useEffect, useState} from "react";
// import {moduleName} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {useRoute} from "./router";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/config";
import {Text, View} from "react-native";
import {authStateChangeUser} from "./redux/auth/authOperations";


const Main = () => {
    // const [user, setUser] = useState(null);

    const {stateChange} = useSelector((state) => state.auth);
    console.log('Main, stateChange: ', stateChange);
    const dispatch = useDispatch();

    /*onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log('onAuthStateChanged uid: ', uid);
            // console.log('onAuthStateChanged user: ', user);
            setUser(uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    })*/





    useEffect(() => {
        dispatch(authStateChangeUser())
        // console.log('Main, stateChange2: ', stateChange);
    }, [stateChange])


    const routing = useRoute(stateChange);
    // const routing = useRoute();

    return (
        <NavigationContainer>
            {routing}
        </NavigationContainer>
    )

    // return (
    //     <NavigationContainer>
    //         <View><Text>LLLL</Text></View>
    //     </NavigationContainer>
    // )

}

export default Main;