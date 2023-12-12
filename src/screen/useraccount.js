import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import Lightbox from "react-native-lightbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ButtomNavbar from "../components/BottomNavbar/bottomNavbar";
import { useNavigation } from "@react-navigation/native";
import { themeStyles } from "../../styles";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import axios from "axios";

export default function UserAccount({ route }) {
  const { post } = route?.params;
  const userId = post?.userId;
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [userPost, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    try {
      const apiUrl = `${EXPO_PUBLIC_API_URL}post/userpost/${userId}`;
      console.log("apiUrl", apiUrl);
      const response = await axios.get(apiUrl);
      if (response) {
        console.log("post get successfully", response?.data);
        setUserPosts(response?.data?.posts);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [userId]);

  const renderItem = ({ item }) => (
    <Lightbox
      activeProps={{ style: { width: "100%", height: "100%" } }}
      onOpen={() => setSelectedImage(item)}
      onClose={() => setSelectedImage(null)}
    >
      <Image style={styles.post} source={{ uri: item.url }} />
    </Lightbox>
  );

  return (
    <View style={styles.mainSection}>
      <ScrollView style={styles.SecondSection}>
        <View style={styles.backSection}>
          <Pressable
            onPress={() => navigation.navigate("post")}
            style={{
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
              padding: 10,
            }}
          >
            <FontAwesome name="long-arrow-left" color={"white"} size={30} />
            <Text style={styles.name}>Post</Text>
          </Pressable>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImg}
              //source={require("../../assets/comment1.png")}
              source={{ uri: post?.user?.url }}
            />
            <View style={styles.totalPost}>
              <Text style={styles.postName}>Post</Text>
              <Text style={styles.postName}>{userPost?.length}</Text>
            </View>
            <View style={styles.totalPost}>
              <Text style={styles.reelsName}>Reels</Text>
              <Text style={styles.postName}>0</Text>
            </View>
          </View>
          <View style={styles.commentText}>
            <Text style={styles.profileName}>@{post?.user?.fullName}@</Text>
            <Text style={styles.profileName}>@{post?.user?.bio}</Text>
            <Text style={styles.profileName}>caption put caption ....</Text>
            <Text style={styles.profileName}>caption put caption here....</Text>
          </View>
        </View>
        <View style={styles.postContainer}>
          <View style={styles.img}>
            <FlatList
              data={userPost}
              keyExtractor={(item) => item?._id?.toString()}
              renderItem={renderItem}
              numColumns={3}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{backgroundColor:"black"}}>
        <ButtomNavbar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
  },
  SecondSection: {
    flex: 1,
  },
  name: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "600",
  },
  profileContainer: {
    paddingHorizontal: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  profileSection: {
    flexDirection: "row",
  },
  profileImg: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeStyles.primaryColor,
  },
  totalPost: {
    // maxWidth: "40%",
    paddingHorizontal: "15%",
    paddingTop: "1%",
  },
  postName: {
    color: "#D9D9D9",
    fontSize: 15,
    fontWeight: "800",
  },
  reelsName:{
    fontSize: 15,
    fontWeight: "800",
    color: "#D9D9D9",
    color:'gray'
  },
  commentText: {
    maxWidth: "75%",
    paddingVertical: "2%",
  },
  profileName: {
    color: "#D9D9D9",
    fontSize: 13,
    fontWeight: "400",
  },

  postContainer: {
    flexDirection: "column",
    // paddingHorizontal: 5,
  },
  img: {
    flexDirection: "column",
  },
  post: {
    aspectRatio: 1, 
    margin: 4,
    borderRadius: 2,
    //width: "500%",
    height: 110,
    // padding: "auto",
    borderWidth: 1,
    borderColor: "white",
  },
  
});
