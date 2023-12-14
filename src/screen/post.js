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
  Modal,
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
    console.log("in use callback")

    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllPost();
    }, 2000);
  }, []);
  useEffect(() => {
    console.log("in use effect")
    getAllPost();
    return () => { };
  }, [page]);

  const handleLoadMore = () => {
    console.log("handle load more call", page)
    if (!loading) {
      setPage(page + 1);
    }
  };



const getLatestPost = async () => {
    setLoading(true)
    try {
      let url = `${EXPO_PUBLIC_API_URL}post/allpost?page=${page}&limit=10`
      //let url = "http://192.168.43.177:3000/post/allpost";
      console.log("url:", url)
      let response = await axios.get(
        url
      );
      console.log("response of get",response);
      // let test=posts
      setPosts(response?.data?.data);
      // setPage(page + 1);
    } catch (error) {
      console.log("api error", error);
    }
    setLoading(false)
  };

  
  const getAllPost = async () => {
    setLoading(true)
    try {
      let url = `${EXPO_PUBLIC_API_URL}post/allpost?page=${page}&limit=10`
      //let url = "http://192.168.43.177:3000/post/allpost";
      console.log("url:", url)
      let response = await axios.get(
        url
      );
      console.log("response of get",response);
      // let test=posts
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
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
        onScrollAnimationEnd={handleLoadMore}
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
        <Header/>
        {posts?.length > 0 ? posts?.map((post, index) => {
          return <PostItem key={index} post={post} getAllPost={getLatestPost}/>;
        }) :
          ""
        }
      </ScrollView>
      <View>
        <BottomNavBar />
      </View>

      <Modal
        transparent={true}
        animationType={'fade'}
        visible={loading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size='large' animating={loading} color="white" />

            {/* If you want to image set source here */}
            {/* <Image
              source={require('../assets/images/loader.gif')}
              style={{ height: 80, width: 80 }}
              resizeMode="contain"
              resizeMethod="resize"
            /> */}
          </View>
        </View>
      </Modal>
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
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
});

export default Post;
