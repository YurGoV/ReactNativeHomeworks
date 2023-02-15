import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import Home from "./Screens/Main/Home";
import PostScreen from "./Screens/Posts/PostsScreen";
import CreatePostsScreen from "./Screens/Posts/CreatePostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import MapScreen from "./Screens/Additionall/MapScreen";
import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {
    Pressable,
} from "react-native";
import {authStateChangeUser} from "./redux/auth/authOperations";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (authState) => {


    if (authState) {
        return (
            <MainStack.Navigator initialRouteName="Home"// todo: maybe home?
                                 screenOptions={{
                                     tabBarShowLabel: false,
                                 }}>
                <MainStack.Screen name="Home"
                                  component={Home} options={{
                    headerShown: false,
                }}/>
                <MainStack.Screen name="Map"
                                  component={MapScreen} options={{
                    headerShown: false,
                }}/>

            </MainStack.Navigator>
        );


    }

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
        </MainStack.Navigator>
    );
}


/*if (!authState) {
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
    <MainStack.Navigator initialRouteName="Home"// todo: maybe home?
                         screenOptions={{
                             tabBarShowLabel: false,
                         }}>
        <MainStack.Screen name="Home"
                          component={Home} options={{
            headerShown: false,
        }}/>
        <MainStack.Screen name="Map"
                          component={MapScreen} options={{
            headerShown: false,
        }}/>

    </MainStack.Navigator>
)*/


/*<MainStack.Screen name="Login"
                  component={LoginScreen} options={{
    headerShown: false,
}}/>
<MainStack.Screen name="Registration"
                  component={RegistrationScreen} options={{
    headerShown: false,
}}/>*/

// todo ma be after states and redux live only home, map & comments?

/*<MainTab.Screen options={{
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
                            name={'ProfileScreen'} component={ProfileScreen}/>*/