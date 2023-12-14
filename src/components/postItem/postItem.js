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
import SharePost from "./sharePost";
import CommentPost from "./commentPost";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { themeStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import PostMenu from "./postMenu";

export default function PostItem({ post }) {
  const [totalLikes, setTotalLikes] = useState(post?.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state?.user?.user?.user);

  const userId = user?._id;

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName,{post});
  };

  useEffect(() => {
    setIsLiked(post?.likes?.includes(userId));
  }, [post]);

  const likePost = async (postId,postUserId) => {
    console.log("postId:", postId)
    console.log("postUserId:", postUserId)

    try {
      let url = `${EXPO_PUBLIC_API_URL}post/like`;
      const response = await axios.put(url, { postId, userId,postUserId });
      setTotalLikes(response?.data?.post?.likes?.length);
      setIsLiked(response?.data?.post?.likes?.includes(userId));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <View key={post?._id} style={styles.postCard}>
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
          source={ post?.user?.url ? {
            uri: post?.user?.url,
          }:require("../../../assets/lily.png")}
          style={styles.avatar}
        />
        <Text style={styles.userName} post={post}>{post?.user?.fullName}</Text>
      </TouchableOpacity>
      <PostMenu postId={post?._id} uploadedUserId={post?.userId}/>
      </View>
      <View style={styles.postImg}>
        <Image style={styles.post} source={{ uri: post?.url }} />
      </View>
      <View style={styles.likeComment}>
        <TouchableOpacity onPress={() => likePost(post?._id,post?.userId)}>
          <Icon
            color={"white"}
            style={isLiked ? styles.liked : {}}
            name={"heart"}
            size={25}
          />
        </TouchableOpacity>
        <CommentPost post={post} />
        <SharePost />
      </View>
      <View style={styles.likeLocation}>
        <Text style={styles.text}>{totalLikes} Likes</Text>
        {post?.location ?
          <Text style={styles.location}>
            <SimpleLineIcons
              color={"white"}
              // style={isLiked ? styles.liked : {}}
              name={"location-pin"}
              size={15}
            />
            {" "}{post?.location}</Text>
          : ''}
      </View>
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>{post?.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 0,
  },
  postHeader:{
   flexDirection:"row",
   justifyContent:"flex-end",
   width:"100%",
   paddingHorizontal:20,
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