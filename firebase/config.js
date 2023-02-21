import * as firebase from "firebase/app";
// import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'
import { getStorage, ref, uploadBytes} from "firebase/storage";

/////
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
/////

// import { initializeApp } from 'firebase/app';
import "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';



const firebaseConfig = {
    apiKey: "AIzaSyAhYhunTMHDZdcIIrPKbtEkxnFdZOnR8oM",
    authDomain: "reactnative-hw.firebaseapp.com",
    projectId: "reactnative-hw",
    storageBucket: "reactnative-hw.appspot.com",
    messagingSenderId: "284974135059",
    appId: "1:284974135059:web:b7dd7463a4450894028ce6",
    measurementId: "G-DEXM0RCVCX"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

