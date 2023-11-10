import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function PostItem({ post = { post } }) {
  //const [totalLikes, setTotalLikes] = useState(post?.likes || 0);
  const [totalLikes, setTotalLikes] = useState(post?.like || 0);
  const  userId="65437e2ed3b869c3002a9072";
  
  const likePost = async (postId) => {
    try {
      const response = await axios.put(
        `${process.env.EXPO_PUBLIC_API_URL}/post/like`,
        { postId, userId }
      );
      setTotalLikes(response.data.likes);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <View key={post?._id} style={styles.postCard}>
      <View style={styles.profile}>
        <Image source={require("../../../assets/lily.png")} />
        <Text style={styles.userName}>{post?.user?.fullName}</Text>
      </View>
      <View style={styles.postImg}>
        <Image style={styles.post} source={{ uri: post?.url }} />
      </View>
      <View style={styles.likeComment}>
        <TouchableOpacity onPress={() => likePost(post?._id)}>
          <Icon color={"white"} name={"thumbs-o-up"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon color={"white"} name={"comment-o"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon color={"white"} name={"share"} size={20} />
        </TouchableOpacity>
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
});
