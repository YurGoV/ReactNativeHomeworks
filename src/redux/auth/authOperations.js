import {auth} from '../../../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import {authSlice} from './authReducer'


// todo: /DONE/ https://amanhimself.dev/blog/remove-asyncstorage-has-been-extracted-warning-using-firebase//
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//     initializeAuth,
//     getReactNativePersistence
// } from 'firebase/auth/react-native';
//
// const auth = initializeAuth(db, {
//     persistence: getReactNativePersistence(AsyncStorage)
// });


export const authSignUpUser = ({email, password, login}) => async (dispatch, getState) => {
    try {
        // const user = await db.auth().createUserWithEmailAndPassword(email, password)
        // const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {//
        // .then(() => {
        //     // Signed in
        //
        //     // const user = userCredential.user;///
        //
        //     // user.updateProfile({
        //     //     displayName: login,
        //     // })
        //     console.log('user created');
        // })
        await updateProfile(auth.currentUser, {
            displayName: login,
        })
        // .then(() => {
        //
        //     console.log('user profile updated');
        //     // console.log('userCredentia user:', userCredential.user);
        // })


        const updatedUser = await auth.currentUser;
        // console.log('test: ', test);
        const {uid, displayName} = updatedUser;
        console.log(displayName, uid);
        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
        }))


        /*
             const uid = user.uid
             dispatch(authSlice.actions.updateUserProfile({
                 userId: uid,
             }))
             console.log('user: ', user);
             console.log(uid);
             // ...
         })*/
    } catch (err) {
        // const user = await db.auth()

        // catch((err) => {
        console.log('error', err);
        console.log('error message', err.message);
        // })
    }

    // updateProfile(auth.currentUser, {
    //     displayName: login,
    // })
    //     .then(() => {
    //
    //         console.log('updated');
    //     })
    //     .catch((err) => {
    //         console.log('error', err);
    //         console.log('error message', err.message);
    //     })
}

export const authSignInUser = ({email, password}) => async (dispatch, getState) => {
    // try {
    // const user = await db.auth().createUserWithEmailAndPassword(email, password)
    // const auth = getAuth();
    try {

        await signInWithEmailAndPassword(auth, email, password)
            /*.then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const uid = user.uid
                console.log('logIn user: ', user);
                dispatch(authSlice.actions.updateUserProfile({userId: uid}))

                // console.log(user);
                // ...
            })*/
        const loggedUser = await auth.currentUser;
        // console.log('test: ', test);
        const {uid, displayName} = loggedUser;
        console.log(displayName, uid);
        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
        }))

    } catch (err) {
        // const user = await db.auth()

        // catch((err) => {
        console.log('error', err);
        console.log('error message', err.message);
        // })
    }
}

export const authStateChangeUser = () => async (dispatch, getState) => {

    try {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                /*  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  console.log('onAuthStateChanged uid: ', uid);
                  // console.log('onAuthStateChanged user: ', user);
                  // setUser(uid);
                  // ...*/

                const authUser = auth.currentUser;
                // console.log('test: ', test);
                const {uid, displayName} = authUser;
                console.log(displayName, uid);
                dispatch(authSlice.actions.updateUserProfile({
                    userId: uid,
                    login: displayName,
                }));
                dispatch(authSlice.actions.authStateChange({currentState: true}))

            } else {
                // User is signed out
                // ...
            }
        });

    } catch (err) {
        console.log('error', err);
        console.log('error message', err.message);
    }

}


export const authSignOutUser = () => async (dispatch, getState) => {
    console.log('out');
    await auth.signOut();
    dispatch(authSlice.actions.authSignOut())
}