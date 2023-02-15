import React from "react";
import {useFonts} from 'expo-font';
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/store";
import Main from "./Main";


export default function App() {

    const [fontsLoaded] = useFonts({
        'Roboto': require('../img/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
};
