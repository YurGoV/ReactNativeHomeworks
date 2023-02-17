import React, {useState} from "react";

import {
    View, Text, Image, Pressable, TextInput,
} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {collection, doc, query, setDoc, getDocs, getDoc} from "firebase/firestore";
import {db} from '../../../firebase/config'

import {styles} from "../Posts/Posts.styles";


const CommentsScreen = ({navigation, route}) => {

    const [comment, setComment] = useState(null);
    const {login} = useSelector(state => state.auth);


    const {
        id,
        header,
        photo,
        place,
        location = null,
    } = route.params;

    console.log(route.params);
    console.log('commmmmmm', comment);

    const commentHandler = (value) =>
        setComment(value);

    // const q = query(collection(db, "posts", id, 'comments'));
    const q = query(collection(db, "posts", id, 'comments'));
    const getAllComments = async () => {
        // const postRef = doc(db, 'posts', id, 'comments');
        // const postData = await getDoc(postRef)
        // const allComments = await getDocs(q);
        // console.log('post dataaaa', postData);
        // const comments = await getDocs(q);
        // console.log('commm dataaaa', comments.docs);
        // comments.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc, " => ", doc.data());
        // });

        const comments = await getDocs(q);
        let commentsArr = []
        await comments.forEach((comm) => {
               commentsArr.push(comm.data())
        })

        console.log(commentsArr);

/*        // const ttt = await comments.map(comment => comment.data())
        const ttt = commentsArr.map(comment => comment.data())


        console.log(ttt);*/


    }

    const t = getAllComments();

    const createComment = async () => {
        const uniqueCommentId = Date.now().toString()// todo: refactoring

        await setDoc(doc(db, 'posts', id, 'comments', uniqueCommentId), {
            comment: comment,
            login: login,
        });
    }


    return (
        <View style={styles.postsMain}>
            <View style={styles.postSection}>
                <Text style={{paddingBottom: 5}}>{header}</Text>
                <Image style={styles.postImage}
                       source={{uri: photo}}/>
                <View style={styles.postText}>

                    <Text tyle={{paddingBottom: 20}}>{place}</Text>

                </View>

                <TextInput
                    value={comment}
                    onChangeText={commentHandler}
                    placeholder="comment"
                    style={styles.postInput}
                />
                <Pressable title={"Post"} style={styles.postButton}
                           onPress={createComment}
                >
                    <Text>Publish</Text>
                </Pressable>

            </View>
        </View>
    )
};

export default CommentsScreen;