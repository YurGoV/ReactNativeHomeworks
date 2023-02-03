import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";

const Home = (params) => {
    // console.log(params);
    return (
        <PostsScreen></PostsScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Home;