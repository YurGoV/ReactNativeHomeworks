import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    regInputs: {
        display: 'flex',
        position: "relative",
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    textPosition: {
        display: 'flex',
        paddingBottom: 40,
    },

    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        marginBottom: 10,

    },

    postInput: {
        width: 300,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        marginTop: 10,

    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 300,
        height: 50,
        padding: 10,
        borderColor: "grey",
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#FF6C00',

    },

    postButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 300,
        height: 50,
        padding: 10,
        borderColor: "grey",
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#F6F6F6',
        marginTop: 20,

    },

    retakePhotoButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
        height: 50,
        padding: 10,
        borderColor: "grey",
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#F6F6F6',
        marginTop: 20,

    },

    avatarPlace: {
        display: "flex",
        minHeight: 120,
        minWidth: 120,
        position: "absolute",
        top: -120,
        borderRadius: 16,
        backgroundColor: '#F6F6F6',
    },

    add: {
        display: 'flex',
        position: "absolute",
        minHeight: 25,
        minWidth: 25,
        borderRadius: 100,
        color: 'blue',
        top: -50,
        right: '39%',
    },
});