import React, {useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {authSignOutUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";


import {db} from '../../../firebase/config'
import {collection, query, where, getDocs} from "firebase/firestore";

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
    const [posts, setPosts] = useState([])

    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(authSignOutUser())
    }

    console.log('gappp');
    const q = query(collection(db, "posts"));

    const getAllPosts = async () => {
        const querySnapshot = await getDocs(q);

        setPosts(querySnapshot.docs.map((post) => ({
            ...post.data(), id: post.id
        })));
    }

    console.log('gappp');
    useEffect(() => {

        getAllPosts();
        // console.log('posts', posts);

    }, [])


    // todo: тимчасово, поки без БД
    if (posts.length === 0) {
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
                        <Text>Natali Romanovaaaaa</Text>
                        <Text>example@email.com</Text>
                    </View>
                </View>
            </View>
        )
    }

    // const {
    //     location,
    //     pictureHeaders,
    //     pictureUrl
    // } = route.params;
    console.log('postsee', posts);
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
                               initialParams={{posts: [posts]}}/>
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