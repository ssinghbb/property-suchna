import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";

const users = [
  { id: 1, name: "Rohit", profileImage: require("../../assets/lily.png") },
  { id: 2, name: "John", profileImage: require("../../assets/lily.png") },
  { id: 3, name: "Alice", profileImage: require("../../assets/lily.png") },
  { id: 4, name: "vaishali", profileImage: require("../../assets/lily.png") },
  { id: 5, name: "keerti", profileImage: require("../../assets/lily.png") },
];

const posts = [
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

  const handleSavePost = (postId) => {
    if (!savedPosts.includes(postId)) {
      setSavedPosts([...savedPosts, postId]);
    }
  };
  const handleLike=(id)=>{
    console.log("id",id)
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.postPage}>
        {posts.map((post) => {
          const user = users.find((u) => u.id === post.userId);
          return (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.profile}>
                <Image source={user.profileImage} />
                <Text style={styles.userName}>{user.name}</Text>
              </View>
              <View style={styles.postImg}>
                <Image style={styles.post} source={post.imageUrl} />
              </View>

              <View style={styles.likeComment}>
                <Icon color={"white"} onPress={()=>handleLike(post.id)} name={"thumbs-o-up"} size={20} />
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
    
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    padding: 2,
    paddingTop: 40,
    paddingLeft: 20,
  },
  postImg: {
    width: "100%",
    paddingVertical: 10,
  },
  post: {
    width: "100%",
  },
  likeComment: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 20,
  },
  saveIconContainer:{
    paddingLeft:220,
  }, 
  descriptionSection: {
    paddingVertical: 8,
    paddingLeft: 20,
  },
  description: {
    color: "white",
    fontSize: 13,
  },
  userName: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  postPage: {
    flex: 1,
    width: "100%",
  },
});

export default Post;
