import React from "react";
import {useFonts} from 'expo-font';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import Main from "./src/Main";


export default function App() {

    const [fontsLoaded] = useFonts({
        'Roboto': require('./img/fonts/Roboto-Regular.ttf'),
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
