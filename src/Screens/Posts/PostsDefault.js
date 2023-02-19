import React, {useEffect} from "react";
import {
    View,
    Text,
    Image, Pressable,
    FlatList,
} from "react-native";


import {Ionicons} from '@expo/vector-icons';
import {styles} from './Posts.styles'
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../../firebase/config";


const PostsDefaultScreen = ({navigation, route}) => {


    if (!route.params) {
        return (
            <View style={styles.createPostMain}>
                <View style={{flexDirection: 'row',}}>
                    <Image source={require('../../../img/avatar.png')}/>
                    <View style={{justifyContent: 'center', paddingLeft: 20}}>
                        <Text>Natali Romanova</Text>
                        <Text>example@email.com</Text>
                    </View>
                </View>
            </View>
        )
    }

    // const {
    //     location,
    //     pictureHeaders,
    //     fireBaseUrl,
    //     key
    // } = route.params;

    // console.log('paramsssssssssssssssss: ', route.params.posts[0]);

    /*const posts = route.params.posts[0].map((item) => {
        console.log(item.id);})*/


    const posts = route.params.posts[0];
    // console.log(' ppppp', posts);
    // console.log('pppppppppppppppp', posts);


    return (
        <View style={styles.postsMain}>
            <View style={styles.postsOwnerSection}>
                <Image source={require('../../../img/avatar.png')}/>
                <View style={styles.postsProfileText}>
                    <Text>Natali Romanova</Text>
                    <Text>example@email.com</Text>
                </View>
            </View>
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
                                  <Pressable title={"Comments"}
                                             onPress={() => navigation.navigate("Comments", {
                                                 id: item.id,
                                                 header: item.headers.name,
                                                 photo: item.photo,
                                                 place: item.headers.place,
                                                 location: item.location,
                                             })}>
                                      <Text style={{color: 'grey'}}>
                                          <Ionicons name="chatbubble-outline" size={24} color="grey"/>
                                          {item.commentsCount ?? 0}
                                      </Text>
                                  </Pressable>
                              </View>

                          </View>
                      )}
            />

        </View>
    )
};

export default PostsDefaultScreen;

/*
{posts.map(post => (
    <View style={styles.postSection} key={post.id}>
        <Image style={styles.postImage}
               source={{uri: post.photo}}/>
        <View style={styles.postText}>
            <Text style={{paddingBottom: 20}}>{post.headers.name}</Text>
            <View>
                <Pressable title={"Map"}
                           onPress={() => navigation.navigate("Map", {
                               // post.location,
                           })}>
                    <Ionicons name="location-outline" size={24} color="green"/>
                    <Text tyle={{paddingBottom: 20}}>{post.headers.place}</Text>
                </Pressable>
            </View>
            <Pressable title={"Comments"}
                       onPress={() => navigation.navigate("Comments", {
                           // post.location,
                       })}>
                <Text style={{color: 'grey'}}>
                    <Ionicons name="chatbubble-outline" size={24} color="grey"/> 0
                </Text>
            </Pressable>
        </View>

    </View>
))}
*/
