import {auth} from '../../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import {authSlice} from './authReducer'

// todo: /DONE/ https://amanhimself.dev/blog/remove-asyncstorage-has-been-extracted-warning-using-firebase//
export const authSignUpUser = ({email, password, login, avatar}) => async (dispatch, getState) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: login,
        });
        try {
            await updateProfile(auth.currentUser, {
                photoURL: avatar,
            })
        } catch (err) {
            console.log(err);
        }

        const updatedUser = await auth.currentUser;
        const {uid, displayName} = updatedUser;
        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
            avatar: avatar,
        }))

    } catch (err) {
        console.log('error message', err.message);
    }
}

export const authSignInUser = ({email, password}) => async (dispatch, getState) => {

    try {
        await signInWithEmailAndPassword(auth, email, password)
        const loggedUser = await auth.currentUser;
        const {uid, displayName} = loggedUser;
        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
        }))

    } catch (err) {
        console.log('error message', err.message);
    }
}

export const authStateChangeUser = () => async (dispatch, getState) => {

    try {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                const authUser = auth.currentUser;
                const {uid, displayName, photoURL} = authUser;

                dispatch(authSlice.actions.updateUserProfile({
                    userId: uid,
                    login: displayName,
                    avatar: photoURL,
                }));
                dispatch(authSlice.actions.authStateChange({currentState: true}))
            }
        });

    } catch (err) {
        console.log('error message', err.message);
    }
}

export const profileUpdateAvatar = ({avatar}) => async (dispatch, getState) => {
    try {
        await updateProfile(auth.currentUser, {
            photoURL: avatar,
        })

        const {uid, displayName, photoURL} = auth.currentUser;

        dispatch(authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
            avatar: photoURL,
        }));


    } catch (err) {
        console.log('error message', err.message);
    }
}


export const authSignOutUser = () => async (dispatch, getState) => {
    await auth.signOut();
    dispatch(authSlice.actions.authSignOut())
}