import React from "react";
import PostScreen from "../Posts/PostsScreen";
import CreatePostsScreen from "../Posts/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';


const MainTab = createBottomTabNavigator();

const Home = () => {
    return (
        <MainTab.Navigator initialRouteName="Posts"
                           screenOptions={{
                               tabBarShowLabel: false,
                           }}>
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons name="post" size={size} color={color}/>),
            }}
                            name={'PostScreen'} component={PostScreen}/>
            <MainTab.Screen options={{
                title: 'Create post',
                headerTitleAlign: 'center',
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialIcons name="create" size={size} color={color}/>
                ),
            }}
                            name={'CreatePostsScreen'} component={CreatePostsScreen}/>
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons name="face-man-profile" size={size} color={color}/>
                ),
            }}
                            name={'ProfileScreen'} component={ProfileScreen}/>
        </MainTab.Navigator>
    );
};

export default Home;