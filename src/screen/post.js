import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";

const users = [
  { id: 1, name: "Rohit", profileImage: require("../../assets/lily.png") },
  { id: 2, name: "John", profileImage: require("../../assets/lily.png") },
  { id: 3, name: "Alice", profileImage: require("../../assets/lily.png") },
  { id: 4, name: "vaishali", profileImage: require("../../assets/lily.png") },
  { id: 5, name: "keerti", profileImage: require("../../assets/lily.png") },
];

const postsTest = [
  {
    id: 1,
    userId: 1,
    imageUrl: require("../../assets/post1.png"),
    description:
      "313 D, Seva Sardar Nagar, Manoramaganj, Indore 452001 (M.P.) ............",
  },
  {
    id: 2,
    userId: 2,
    imageUrl: require("../../assets/post3.png"),
    description:
      "313 D, Seva Sardar Nagar, Manoramaganj, Indore 452001 (M.P.) ............",
  },
  {
    id: 3,
    userId: 3,
    imageUrl: require("../../assets/post4.png"),
    description:
      "313 D, Seva Sardar Nagar, Manoramaganj, Bhopal 452001 (M.P.) ............",
  },
  {
    id: 4,
    userId: 4,
    imageUrl: require("../../assets/post3.png"),
    description:
      "313 D, Seva Sardar Nagar, Manoramaganj, Indore 452001 (M.P.) ............",
  },
  {
    id: 5,
    userId: 5,
    imageUrl: require("../../assets/post4.png"),
    description:
      "313 D, Seva Sardar Nagar, Manoramaganj, Jabalpur 452001 (M.P.) ............",
  },
];

const Post = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [posts, setPosts] = useState([])


  const handleSavePost = (postId) => {
    if (!savedPosts.includes(postId)) {
      setSavedPosts([...savedPosts, postId]);
    }
  };
  const handleLike = (id) => {
    console.log("id", id);


  };

  useEffect(() => {

    getAllPost()
    return () => {

    }
  }, [])

  const getAllPost = async () => {
    console.log("get all post")
    let _post = await axios.get(`${EXPO_PUBLIC_API_URL}post/allpost`)
    console.log("_post:", _post?.data)
    setPosts(_post.data)
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
        ;
      getAllPost()

    }, 2000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      {/* {console.log("posts", posts)} */}
      <ScrollView style={styles.postPage}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />

        }
      >
        {posts?.data?.length > 0 ? posts?.data?.map((post, id) => {
          const user = users.find((u) => u.id === post.userId);
          // { console.log("user", user) }
          return (
            <View key={id} style={styles.postCard}>
              <Text style={styles.myText} >{id + 1}</Text>

              <View style={styles.profile}>
                {/* <Image source={user.profileImage} /> */}
                {/* <Text style={styles.userName}>{user.name}</Text> */}
              </View>
              <View style={styles.postImg}>
                <Image style={styles.post} source={{ uri: post.url }} />
              </View>

              <View style={styles.likeComment}>
                <Icon
                  color={"white"}
                  onPress={() => handleLike(post.id)}
                  name={"thumbs-o-up"}
                  size={20}
                />
                <Icon color={"white"} name={"comment-o"} size={20} />
                <Icon color={"white"} name={"share"} size={20} />

                <View style={styles.saveIconContainer}>
                  <TouchableOpacity onPress={() => handleSavePost(post.id)}>
                    <Icon
                      color={"white"}
                      name={
                        savedPosts.includes(post.id) ? "bookmark" : "bookmark-o"
                      }
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.descriptionSection}>
                <Text style={styles.description}>{post.description}</Text>
              </View>
            </View>
          );
        }) : ''}
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
    textAlign: 'center'
  },
  postCard: {
    flex: 1,
    height: "100%", // Set the height to the full screen height
  },
});

export default Post;
