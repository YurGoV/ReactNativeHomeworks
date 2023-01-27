import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    regInputs: {
        // width: '100%',
        // flex: 1,
        display: 'flex',
        position: "relative",
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ecf0f1",
        backgroundColor: "white",

        // border: "1px solid red",
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

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 300,
        height: 50,
        padding: 10,
        // borderWidth: 1,
        borderColor: "grey",
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#FF6C00',

    },

    avatarPlace: {
        display: "flex",
        minHeight: 120,
        minWidth: 120,
        position: "absolute",
        // borderWidth: 1,
        // borderColor: "red",
        top: -120,
        borderRadius: 16,
        backgroundColor: '#F6F6F6',
        // left: "50%",
        // width: 120,
        // height: 120,
        // border: '1px solid red',
        // zIndex: 200,

    },

    add: {

        // &:after, &:before {
        display: 'flex',
        position: "absolute",

        minHeight: 25,
        minWidth: 25,
        borderRadius: 100,

        // borderWidth: 0,
        // borderColor: "red",
        color: 'blue',

        // position: 'absolute',
        top: -50,
        right: '39%',
    },
});