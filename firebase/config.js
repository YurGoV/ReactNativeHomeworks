import * as firebase from "firebase/app";
// import firebase from "firebase/app";

// import { initializeApp } from 'firebase/app';
import "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';



/*const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "DOMAIN",
    databaseURL: "URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
};*/

const firebaseConfig = {
    apiKey: "AIzaSyAhYhunTMHDZdcIIrPKbtEkxnFdZOnR8oM",
    authDomain: "reactnative-hw.firebaseapp.com",
    projectId: "reactnative-hw",
    storageBucket: "reactnative-hw.appspot.com",
    messagingSenderId: "284974135059",
    appId: "1:284974135059:web:b7dd7463a4450894028ce6",
    measurementId: "G-DEXM0RCVCX"
};

export const db = firebase.initializeApp(firebaseConfig);

// const auth = initializeApp.auth();
export const auth = initializeAuth(db, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// export { auth };
// export default firebase;
// export default firebase.initializeApp(firebaseConfig)