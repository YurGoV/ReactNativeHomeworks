import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {authSignOutUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";

import {
    View,
    Text,
    Image, Pressable,
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import MapScreen from '../Additionall/MapScreen'
import PostsDefaultScreen from "./PostsDefault";
import CommentsScreen from "../Additionall/CommentsScreen";


const PostsStack = createStackNavigator();

const PostsScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(authSignOutUser())
    }

    // todo: тимчасово, поки без БД
    if (!route.params) {
        return (

            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={require('../../../img/avatar.png')}/>
                    <View style={{
                        justifyContent: 'center',
                        paddingLeft: 20
                    }}>
                        <Text>Natali Romanova</Text>
                        <Text>example@email.com</Text>
                    </View>
                </View>
            </View>
        )
    }

    const {
        location,
        pictureHeaders,
        pictureUrl
    } = route.params;

    return (
        <PostsStack.Navigator
            initialRouteName="PostsDefaultScreen"
        >
            <PostsStack.Screen name='PostsDefaultScreen' component={PostsDefaultScreen}
                               options={{
                                   title: 'Posts',
                                   headerTitleAlign: 'center',
                                   headerRightContainerStyle: {
                                       paddingRight: 40,
                                   },
                                   headerRight: () => (
                                       <Pressable
                                           onPress={signOut}
                                           title="LogOut"
                                       >
                                           <MaterialCommunityIcons name="logout" size={24} color="grey"/>
                                       </Pressable>
                                   ),
                                   headerLeft: null
                               }}
                               initialParams={{pictureHeaders, location, pictureUrl}}/>
            <PostsStack.Screen name="Map" component={MapScreen}
                               options={{
                                   title: 'Photo location map'
                               }}/>
            <PostsStack.Screen name="Comments" component={CommentsScreen}
                               options={{
                                   title: 'post comments'
                               }}/>
        </PostsStack.Navigator>
    )
};

export default PostsScreen;