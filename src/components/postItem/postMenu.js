import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CustomeButton from "../common/CoustomButton";
import { useSelector } from "react-redux";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import axios from "axios";

export default function PostMenu(post) {
  const [openModal, setOpenModal] = useState(false);
  // console.log(" postId", post?.postId);
  const user = useSelector((state) => state?.user?.user?.user) || {};
  const uploadedUserId = post?.uploadedUserId;
  const userId = user?._id;
  const canDeletePost = userId === uploadedUserId;

  const handelPost = async () => {
    if (!canDeletePost) {
      Alert.alert("You don't have permission to delete this post");
      return;
    }
    try {
      const url = `${EXPO_PUBLIC_API_URL}post/delete/${post?.postId}/${userId}`;
      const response = await axios.delete(url);
      console.log("Response", response?.status);
      Alert.alert("Post deleted successfully");
      setOpenModal(false);
    } catch (error) {
      console.log("Error, deleting post", error);
      Alert.alert("Error, deleting post");
    }
  };

  return (
    userId == uploadedUserId ? (
    <View>
      <View>
        <TouchableOpacity
          style={styles.manuIcon}
          onPress={() => setOpenModal(true)}
        >
          <EntypoIcon color={"white"} name={"dots-three-vertical"} size={20} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomeButton title={"Delete Post"} onPress={handelPost} />
          </View>
        </View>
      </Modal>
    </View>
  ) : <TextInput style={{opacity:0,height:0}}/>
  );
}
const styles = StyleSheet.create({
  manuIcon: {
    paddingTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

































