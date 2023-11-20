import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import SharePost from "./sharePost";
import CommentPost from "./commentPost";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { themeStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";


export default function PostItem({ post = {} }) {
  //const [totalLikes, setTotalLikes] = useState(post?.likes || 0);
  const [totalLikes, setTotalLikes] = useState(post?.likes?.length || 0 );
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();




  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    setIsLiked(post?.likes?.includes(userId));
  }, [post]);
  const userId = "65437e2ed3b869c3002a9072";

  const likePost = async (postId) => {
    console.log("postid", postId);

    try {
      // let url= "http://192.168.1.41:3000/post/like"
      let url = `${EXPO_PUBLIC_API_URL}post/like`;

      const response = await axios.put(url, { postId, userId });
      console.log(response?.data?.post?.likes?.length);
      setTotalLikes(response?.data?.post?.likes?.length);
      setIsLiked(response?.data?.post?.likes?.includes(userId));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <View key={post?._id} style={styles.postCard}>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => {
          navigateToScreen("useraccount")
        }}
      >
        <Image source={require("../../../assets/lily.png")} />
        <Text style={styles.userName}>{post?.user?.fullName}</Text>
      </TouchableOpacity>
      <View style={styles.postImg}>
        <Image style={styles.post} source={{ uri: post?.url }} />
      </View>
      <View style={styles.likeComment}>
        <TouchableOpacity onPress={() => likePost(post?._id)}>
          <Icon
            color={"white"}
            style={isLiked ? styles.liked : {}}
            name={"heart"}
            size={20}
          />
          <Text style={isLiked?styles.text:null}>{totalLikes}</Text>
     
        </TouchableOpacity>
        <CommentPost/>
        <SharePost />
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    height: 60,
    padding: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    margin: 0,
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
    gap: 20,
    paddingLeft: 20,
    paddingTop: 20,
  },
  saveIconContainer: {
    paddingLeft: 220,
  },
  descriptionSection: {
    paddingVertical: 8,
    paddingLeft: 20,
  },
  description: {
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
});
