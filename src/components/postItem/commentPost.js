import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function commentPost({ post = {} }) {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);
  const user = useSelector((state) => state?.user?.user?.user);
  const userId = user?._id;
  //const userName = user?.fullName;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllComments();
    }, 2000);
  }, []);

  const getAllComments = async (postId) => {
    try {
      // const url = `${EXPO_PUBLIC_API_URL}post/comments/${postId}`;
      const url = `${EXPO_PUBLIC_API_URL}comment/comments/${postId}`;
      console.log("url", url);
      const response = await axios.get(url);
      // console.log("response", response);
      // console.log("respost to get", response?.data);
      setCommentData(response?.data?.data || []);
    } catch (error) {
      Alert.alert("Error", "Failed to get  All comment");
      console.error("Error feching  comment:", error);
    }
  };

  const postComment = async (postId) => {
    try {
      // let url = `${EXPO_PUBLIC_API_URL}post/comment`;
      let url = `${EXPO_PUBLIC_API_URL}comment/comments`;
      const response = await axios.post(url, { postId, userId, comment });
      // Alert.alert("Success", "Comment posted successfully");
      setCommentData(response?.data?.data || []);
      setComment("");
      getAllComments(postId);
    } catch (error) {
      Alert.alert("Error", "Failed to post comment");
      console.error("Error posting comment:", error);
    }
  };

  useEffect(() => {
    if (openModal && post?._id) {
      getAllComments(post?._id);
    }
  }, [openModal, post?._id]);

  const renderCommentItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image
        style={styles.commentprofile}
        // source={require("../../../assets/lily.png")}
        source={{
          uri: user?.url || "",
        }}
      />
      <View>
        <Text style={styles.userName}>@{user?.fullName}</Text>
        <Text style={styles.textComment}>{item?.comment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.commentBorder}>
            <Text style={styles.modalText}>Comments</Text>
          </View>

          <FlatList
            data={commentData}
            keyExtractor={(item) => item._id}
            renderItem={renderCommentItem}
            style={styles.scrollSection}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <View style={styles.commentInput}>
            <View>
              <Image
                style={styles.profile}
                //source={require("../../../assets/lily.png")}
                source={{
                  uri: user?.url || "",
                }}
              />
            </View>
            <TextInput
              style={styles.inputSection}
              placeholder="enter comment...."
              placeholderTextColor={"gray"}
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
            <Pressable onPress={() => postComment(post?._id)}>
              <FeatherIcon color={"black"} name={"send"} size={25} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon color={"white"} name={"comment"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    // backgroundColor: "red",
    borderRadius: 20,
    paddingTop: 20,
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex:1,
  },
  commentBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
  },
  centeredView: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
  },
  scrollSection: {
    flex: 1,
    width: "100%",
  },
  commentContainer: {
    flexDirection: "row",
    gap: 9,
    padding: "2%",
    // alignItems: 'center',
  },
  commentprofile: {
    height: 30,
    width: 30,
    alignItems: "center",
    borderRadius: 20,
  },
  userName: {
    fontWeight: "900",
  },
  textComment: {
    fontWeight: "600",
  },
  commentInput: {
    borderWidth: 0.5,
    borderColor: "gray",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  inputSection: {
    flex: 1,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
});
