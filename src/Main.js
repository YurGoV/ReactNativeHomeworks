import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {useRoute} from "./router";
import {authStateChangeUser} from "./redux/auth/authOperations";


const Main = () => {

    const {stateChange} = useSelector((state) => state.auth);
    // console.log('Main, stateChange: ', stateChange);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChangeUser())
    }, [stateChange])


    const routing = useRoute(stateChange);

    return (
        <NavigationContainer>
            {routing}
        </NavigationContainer>
    )
};

export default Main;