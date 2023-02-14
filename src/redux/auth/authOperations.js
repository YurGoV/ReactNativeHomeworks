import db from '../../../firebase/config'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// todo: https://amanhimself.dev/blog/remove-asyncstorage-has-been-extracted-warning-using-firebase/

export const authSignUpUser = ({email, password, login}) => (dispatch, getState) => {
    // try {
    // const user = await db.auth().createUserWithEmailAndPassword(email, password)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('user: ', user);
            // ...
        })
        // const user = await db.auth()
        .catch((err) => {
            console.log('error', err);
            console.log('error message', err.message);
        })
}

export const authSignInUser = ({email, password}) => (dispatch, getState) => {
    // try {
    // const user = await db.auth().createUserWithEmailAndPassword(email, password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('logIn user: ', user);
            // ...
        })
        // const user = await db.auth()
        .catch((err) => {
            console.log('error', err);
            console.log('error message', err.message);
        })
}

const authSignOutUser = () => async(dispatch, getState)
{

}