import React, {useEffect, useState} from "react";

import {
    View,
    Pressable,
    Image,
    ImageBackground, Text,
    FlatList,
} from "react-native";
import {authSignOutUser} from "../../redux/auth/authOperations";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./Main.styles";

import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../../firebase/config";

import {MaterialIcons} from '@expo/vector-icons';


const ProfileScreen = ({navigation, route}) => {

    const {userId} = useSelector(state => state.auth);

    const [posts, setPosts] = useState([])

    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(authSignOutUser())
    }

    const userPostsRef = query(collection(db, "posts"), where("userId", "==", userId));// todo: change to userId


    const getAllPosts = async () => {
        const querySnapshot = await getDocs(userPostsRef);
        const allPosts = querySnapshot.docs.map((post) => ({
            ...post.data(), id: post.id
        }));

        const sortedPosts = allPosts.sort(
            (firstContact, secondContact) =>
                secondContact.id - firstContact.id);
        setPosts(sortedPosts);
        // console.log(sortedPosts);
    }

    useEffect(() => {

        getAllPosts();

    }, [])

    const deletePost = async (postId) => {
        console.log('to delete: id', postId);
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <ImageBackground resizeMode="cover" source={require('../../../img/background.png')} style={styles.img}>
                <View style={styles.regField}>
                    <View style={styles.regInputs}>
                        <View style={styles.avatarPlace}>
                            <Image source={require('../../../img/avatar.png')}/>
                        </View>
                        <Pressable title={"Login"} style={styles.add}
                                   onPress={() => alert("This is a pick photo button!")}>
                            <View>
                                <Image source={require('../../../img/add.png')}/>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={signOut}
                            title="LogOut"
                            style={styles.profileLogOut}
                        >
                            <MaterialCommunityIcons name="logout" size={24} color="lightgrey"/>
                        </Pressable>

                        <FlatList data={posts} keyExtractor={post => post.id}
                            // extraData={selectedId}// todo: postsInState?
                                  renderItem={({item}) => (
                                      <View style={styles.postSection}>
                                          <Text style={{paddingBottom: 20}}>{item.headers.name}</Text>

                                          <Image style={styles.postImage}
                                                 source={{uri: item.photo}}
                                              // onLoad={() => loaded(item.id)}
                                          />
                                          <View style={styles.postText}>

                                              <View>
                                                  {item.location ? (<Pressable title={"Map"}
                                                                               onPress={() => navigation.navigate("Map", {
                                                                                   location: item.location,
                                                                               })}>
                                                      <Ionicons name="location-outline" size={24} color="green"/>
                                                      <Text style={{paddingBottom: 20}}>{item.headers.place}</Text>
                                                  </Pressable>) : (
                                                      <Text style={{paddingBottom: 20}}>{item.headers.place}</Text>
                                                  )}

                                              </View>
                                              <View style={{
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  justifyContent: 'space-between',
                                              }}>
                                                  <Pressable title={"Comments"}
                                                             onPress={() => navigation.navigate("Comments", {
                                                                 id: item.id,
                                                                 header: item.headers.name,
                                                                 photo: item.photo,
                                                                 place: item.headers.place,
                                                                 location: item.location,
                                                             })}>
                                                      <Text>
                                                          <Ionicons name="chatbubble-outline" size={24} color="grey"/>
                                                          {item.commentsCount ?? 0}
                                                      </Text>
                                                  </Pressable>
                                                  <Pressable title={"Delete"}
                                                             onPress={() => deletePost(item.id)}>
                                                      <MaterialIcons name="delete-outline" size={24} color="#FFCCCB"/>
                                                  </Pressable>
                                              </View>
                                          </View>

                                      </View>
                                  )}
                        />


                    </View>
                    <Text>lllll</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

export default ProfileScreen;