import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { useEffect } from "react";

export default function commentPost({ post = {} }) {
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <View style={styles.mainContainer}>
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.commentBorder}>
            <Text style={styles.modalText}>Comments</Text>
          </View>
          <FlatList
            data={staticComments}
            keyExtractor={(item) => item.id}
            renderItem={renderCommentItem}
            style={styles.scrollSection}
          />
          <View style={styles.commentInput}>
            <View>
              <Image
                style={styles.profile}
                source={require("../../../assets/lily.png")}
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
          <Icon color={"white"} name={"comment-o"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 20,
    alignItems: "center",
    height: "100%",
    width: "100%",
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
  },
  userName: {
    fontWeight: "900",
  },
  textComment: {
    fontWeight: "10%",
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
    height: 60
    // placeholder: "enter comment....",
    // placeholderColor: "gray",
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
});
