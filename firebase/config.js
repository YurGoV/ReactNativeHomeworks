// import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import "firebase/auth";

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

initializeApp(firebaseConfig);

const auth = initializeApp.auth();

export { auth };