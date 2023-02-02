import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import {styles} from "./App.styles";
import PostScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {
    View,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
    KeyboardAvoidingView, // новий імпорт
    Platform, // новий імпорт
    ImageBackground,
} from "react-native";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
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
        <MainTab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                // display: 'flex',
                // backgroundColor: 'lightgrey',
                // alignItems: 'center',
                // textAlign: 'center',
                // textJustify: 'center',
                // justifyContent: 'center'
            }
        }}>
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons name="post" size={size} color={color} />                ),
            }}
                            name={'PostScreen'} component={PostScreen}/>
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialIcons name="create" size={size} color={color} />
                ),
            }}
                name={'CreatePostsScreen'} component={CreatePostsScreen} />
            <MainTab.Screen  options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
                ),
            }}
                name={'ProfileScreen'} component={ProfileScreen} />
        </MainTab.Navigator>
    )
}

