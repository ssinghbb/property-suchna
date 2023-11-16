import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  RefreshControl,
} from "react-native";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import PostItem from "../components/postItem/postItem";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllPost();
    }, 2000);
  }, []);
  useEffect(() => {
    getAllPost();
    return () => {};
  }, []);

  const getAllPost = async () => {
    try {
      console.log("get all post");
      //let url = "http://192.168.43.177:3000/post/allpost";
      let response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/post/allpost`
      );

      //let response = await axios.get("http://192.168.1.41:3000/post/allpost");
      setPosts(response?.data?.data || []);
    } catch (error) {
      console.log("api error", error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.postPage}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {posts?.map((post, index) => {
          return <PostItem key={index} post={post} />;
        })}
      </ScrollView>
      <View>
        <BottomNavBar />
      </View>
    </View>
  );
};

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

export default Post;
