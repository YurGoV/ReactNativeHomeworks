import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {
    Pressable,
} from "react-native";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (authState) => {

    if (!authState) {
        return (
            <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen name="Registration"
                                  component={RegistrationScreen} options={{
                    headerShown: false,
                }}/>
                <MainStack.Screen name="Login"
                                  component={LoginScreen} options={{
                    headerShown: false,
                }}/>
                <MainStack.Screen name="Home"
                                  component={Home} options={{
                    headerShown: false,
                }}/>
            </MainStack.Navigator>
        );
    }

    return (
        <MainTab.Navigator initialRouteName="Posts"
                           screenOptions={{
                               tabBarShowLabel: false,
                           }}>
            <MainTab.Screen options={{
                title: 'Posts',
                headerTitleAlign: 'center',
                headerRightContainerStyle: {
                    paddingRight: 40,
                },
                headerRight: () => (
                    <Pressable
                        onPress={() => alert("This is a logout button!")}
                        title="LogOut"
                    >
                        <MaterialCommunityIcons name="logout" size={24} color="grey"/>
                    </Pressable>
                ),
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
    )
}

