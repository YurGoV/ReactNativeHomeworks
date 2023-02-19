import React, {useEffect, useState} from "react";

import {
    View, Text, Image, Pressable, TextInput, FlatList,
} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {collection, doc, query, setDoc, getDocs, updateDoc} from "firebase/firestore";
import {db} from '../../../firebase/config'

import {styles} from "../Posts/Posts.styles";


const CommentsScreen = ({navigation, route}) => {

    const [comment, setComment] = useState(null);
    const [commentId, setCommentId] = useState(null)
    const [comments, setComments] = useState([]);
    const {login} = useSelector(state => state.auth);


    const {
        id,
        header,
        photo,
        place,
        location = null,
    } = route.params;

    // console.log(route.params);
    // console.log('commmmmmm', comment);

    const commentHandler = (value) =>
        setComment(value);

    // const q = query(collection(db, "posts", id, 'comments'));
    const commentsRef = query(collection(db, "posts", id, 'comments'));
    const postRef = doc(db, "posts", id);

    useEffect(() => {


        // let allComments = []
        const getAllComments = async () => {

            let allComments = []

            const comments = await getDocs(commentsRef);

            await comments.forEach((comm) => {
                // console.log(typeof comm.id);
                allComments.push({...comm.data(), id: comm.id})
            })

            const commentsCount = comments.size;
            await updateDoc(postRef, {commentsCount: commentsCount})

            // console.log('accccccccccc', allComments);
            const allOrderedComments = allComments.sort(
                (firstComment, secondComment) =>
                    secondComment.id - firstComment.id);
            setComments(allOrderedComments)

        }
        const t = getAllComments();

        // console.log(t);
        //
        // console.log('accccccccccc', allComments);

    }, [commentId])


    // console.log(comments);


    const createComment = async () => {
        const uniqueCommentId = Date.now().toString()// todo: refactoring

       await setDoc(doc(db, 'posts', id, 'comments', uniqueCommentId), {
            comment: comment,
            login: login,
        });
        // setComments([...comments, comment])
        setCommentId(uniqueCommentId);
        setComment(null)
    }

    // https://blog.logrocket.com/deep-dive-react-native-flatlist/#flatlist-customization

    return (
        <View style={styles.postsMain}>
            <View style={styles.postSection}>
                <Text style={{paddingBottom: 5}}>{header}</Text>
                <Image style={{
                    width: 150,
                    height: 200,
                    borderRadius: 8
                }}
                       source={{uri: photo}}/>

                <FlatList data={comments}
                          keyExtractor={comment => comment.id}
                          renderItem={({item}) => (
                              <View style={{
                                  display: 'flex',
                                  width: 300,
                                  height: 30,
                                  border: '1px solid grey',
                                  borderWidth: 1,
                                  borderRadius: 8,
                                  marginTop: 5,
                              }}>
                                  <Text>{item.comment}</Text>
                              </View>
                          )}/>

                {/*<Text>'lalala'</Text>*/}

                <View style={styles.postText}>

                    <Text style={{paddingBottom: 20}}>{place}</Text>

                </View>

                <TextInput
                    value={comment}
                    onChangeText={commentHandler}
                    placeholder="comment"
                    style={styles.postInput}
                />

                {!comment ? (// todo: repeated twice (in Create Posts also - refactoring
                    <View style={styles.postButtonInactive}>
                        <Text>Publish</Text>
                    </View>
                ) : (
                    <Pressable title={"Post"} style={styles.postButtonActive}
                               onPress={createComment}
                    >
                        <Text>Publish</Text>
                    </Pressable>
                )}


            </View>
        </View>
    )
};

export default CommentsScreen;