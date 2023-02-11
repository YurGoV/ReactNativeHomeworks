import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
    View,
    Text,
    Image, Pressable,
} from "react-native";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import MapScreen from './MapScreen'
import PostsDefaultScreen from "./PostsDefault";
import CommentsScreen from "./CommentsScreen";


const PostsStack = createStackNavigator();

const PostsScreen = ({navigation, route}) => {

    // todo: тимчасово, поки без БД
    if (!route.params) {
        return (

            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: 'white',
                // width: 300,
                // height: 400,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={require('../../img/avatar.png')}/>
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

    console.log(pictureHeaders, location, pictureUrl);

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
                                           onPress={() => navigation.navigate("Login")}
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