import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import axios from "axios";
// import SharePost from "./sharePost";
// import CommentPost from "./commentPost";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import { themeStyles } from "../../styles";
const PostById = (props) => {
    //   console.log("props in props by id:", props?.id)
    // console.log("props in props by id:", props?.route?.params?.id)
    const [postData, setPostData] = useState([])
    const [isLiked, setIsLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(postData?.likes?.length || 0);

    const postId = props?.route?.params?.id
    useEffect(() => {

        getPostById()
        return () => {

        }
    }, [])

    const getPostById = async () => {
        try {
            if (postId) {

                let url = `${EXPO_PUBLIC_API_URL}post/${postId}`

                let response = await axios.get(
                    url
                );
                // console.log("response:", response?.data?.data[0])
                setPostData(response?.data?.data[0])
            }
            else {
                throw new Error("Couldn't find")
            }
        } catch (error) {
            console.log("error:", error)

        }

    }

    return (
        <>
        {/* {console.log("postdata",postData)} */}
            {postData ?
                <View key={postData?._id} style={styles.postCard}>
                    {/* {console.log("check",post?.userId )} */}
                    <View style={styles.postHeader}>
                        <TouchableOpacity
                            style={styles.profile}
                            onPress={() => {
                                navigateToScreen("useraccount")
                            }}
                        >
                            {/* <Image source={require("../../../assets/lily.png")} /> */}
                            <Image
                                // source={ post?.user?.url ? {
                                //   uri: post?.user?.url,
                                // }:require("../../../assets/lily.png")}
                                source={{ uri: postData?.userDetails?.url }}
                                style={styles.avatar}

                            />
                            <Text style={styles.userName} post={postData}>{postData?.userDetails?.fullName}</Text>
                        </TouchableOpacity>
                        {/* <PostMenu postId={postData?._id} uploadedUserId={postData?.userId} getAllPost={getAllPost}/> */}
                    </View>
                    <View style={styles.postImg}>
                        {/* {console.log(postData.url,'1234567890')} */}
                        <Image style={styles.post} source={{ uri: postData?.url }} />
                    </View>
                    <View style={styles.likeComment}>
                        <TouchableOpacity onPress={() => likePost(postData?._id, post?.userId)}>
                            <Icon
                                color={"white"}
                                style={isLiked ? styles.liked : {}}
                                name={"heart"}
                                size={25}
                            />
                        </TouchableOpacity>
                        {/* <CommentPost post={post} /> */}
                        {/* <SharePost post={post} /> */}
                    </View>
                    <View style={styles.likeLocation}>
                        <Text style={styles.text}>{totalLikes} Likes</Text>
                        {postData?.location ?
                            <Text style={styles.location}>
                                <SimpleLineIcons
                                    color={"white"}
                                    // style={isLiked ? styles.liked : {}}
                                    name={"location-pin"}
                                    size={15}
                                />
                                {" "}{postData?.location}</Text>
                            : ''}
                    </View>
                    <View style={styles.descriptionSection}>
                        <Text style={styles.description}>{postData?.description}</Text>
                    </View>
                </View> : ''}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 0,
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        paddingHorizontal: 20,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        width: "100%",
        height: 60,
        padding: 2,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        margin: 0,
        // backgroundColor:'red'
    },
    userName: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    postImg: {
        width: "100%",
        // paddingVertical: 10,
        height: 400,
    },
    post: {
        width: "100%",
        height: 400,
    },
    likeComment: {
        flexDirection: "row",
        gap: 25,
        paddingLeft: 20,
        paddingTop: 10,
        // backgroundColor:'red'
    },
    saveIconContainer: {
        paddingLeft: 220,
    },
    descriptionSection: {
        paddingVertical: 2,
        paddingLeft: 14,
    },
    likeLocation: {
        paddingTop: 8,
        paddingLeft: 10,
        // backgroundColor: 'red',
        flexDirection: "row",
        gap: 10
    },
    description: {
        color: "white",
        fontSize: 13,
    },
    location: {
        color: "white",
        fontSize: 13,
    },
    text: {
        color: "white",
        fontSize: 13,
        paddingLeft: 7,
    },
    postPage: {
        width: "100%",
    },
    myText: {
        color: "red",
        fontSize: 16,
        textAlign: "center",
    },
    postCard: {
        flex: 1,
        height: "100%", // Set the height to the full screen height
    },
    liked: {
        color: themeStyles.primaryColor,
    },
    avatar: {
        width: 34,
        height: 34,
        objectFit: "cover",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        // borderColor: themeStyles.primaryColor,
        // borderWidth: 1,
    },
});

export default PostById