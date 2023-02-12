import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    img: {
        minWidth: "100%",
        flex: 1,
        justifyContent: 'flex-end',
    },

    regField: {
        marginTop: 'auto',
        display: 'flex',
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    regInputs: {
        display: 'flex',
        position: "relative",
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
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

    profileLogOut: {
        display: 'flex',
        position: "absolute",
        minHeight: 25,
        minWidth: 25,
        borderRadius: 100,
        // color: 'blue',
        top: -50,
        right: '10%',
    },
});