import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    regInputs: {
        // width: '100%',
        // flex: 1,
        display: 'flex',
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ecf0f1",
        backgroundColor: "white",

        // border: "1px solid red",
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


});