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
  Share,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import PostItem from "../components/postItem/postItem";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import Header from "../components/Header/header";

const Post = () => {
  const [posts, setPosts] = useState([]);
  // console.log("posts:", posts)
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllPost();
    }, 2000);
  }, []);
  useEffect(() => {
    getAllPost();
    return () => { };
  }, [page]);

  const handleLoadMore = () => {
    console.log("handle load more call", page)
    // Load more data when reaching the end of the list
    if (!loading) {
      // You can add additional conditions here if needed
      setPage(page + 1);
    }
  };

 

  const getAllPost = async () => {
    setLoading(true)
    try {
      console.log("get all post");
      console.log("page:", page)
      let url = `${EXPO_PUBLIC_API_URL}post/allpost?page=${page}&limit=10`
      //let url = "http://192.168.43.177:3000/post/allpost";
      let response = await axios.get(
        url
      );

      // console.log("response",response?.data);
      //let response = await axios.get("http://192.168.1.41:3000/post/allpost");
      // setPosts(response?.data?.data || []);
      setPosts((prevData) => [...prevData, ...response?.data?.data]);
      // setPage(page + 1);
    } catch (error) {

      console.log("api error", error);
    }
    setLoading(false)
  };

  return (
    <View style={styles.mainContainer}>

      <ScrollView
        style={styles.postPage}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScrollEndDrag={handleLoadMore}
      // onScroll={(e) => {
      //   // console.log('eeee',e?.nativeEvent?.contentSize.height)
      //   // console.log('eeee',e?.nativeEvent?.contentOffset.y)
      //   var windowHeight = Dimensions.get('window').height,
      //     height = e.nativeEvent.contentSize.height,
      //     offset = e.nativeEvent.contentOffset.y;
      //   if (windowHeight + offset >= height) {
      //     //ScrollEnd, do sth...
      //     console.log("end function calll")
      //     handleLoadMore()
      //   }

      // }}
      >
        <Header />

        {posts?.length > 0 ? posts?.map((post, index) => {
          return <PostItem key={index} post={post} />;
        }) :
          <ActivityIndicator size={'large'} color='white' />
        }
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
