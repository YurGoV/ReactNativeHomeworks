import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // flex: 1,
        display: 'flex',
        minHeight: "100%",
        minWidth: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "#ecf0f1",
        backgroundColor: "grey",

        // border: "1px solid red",
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        marginBottom: 10,

    },

    img: {
        minWidth: "100%",
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: "flex-end",
    },

    regField: {
        // width: '100%',
        // flex: 1,
        marginTop: 'auto',
        display: 'flex',
        height: "80%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ecf0f1",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

        // border: "1px solid red",
    },
});