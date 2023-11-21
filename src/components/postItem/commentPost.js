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
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function commentPost() {
  const [openModal, setOpenModal] = useState(false);
  const[comment, setComment]=useState("");
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

          <ScrollView style={styles.commentContainer}></ScrollView>
          <View style={styles.commentInput}>
            <View>
              <Image
                style={styles.profile}
                source={require("../../../assets/lily.png")}
              />
            </View>
            <TextInput
              style={styles.inputSection}
              placeholder="write comment here...."
              placeholderTextColor={"gray"}
              value={comment}
            />

            <Pressable  >
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
    shadowOpacity: 0.25,
    shadowRadius: 10,
    height: "100%",
    width: "100%",
    // borderBottomWidth: 1,
    // borderBottomColor: "gray",
  },
  commentBorder: {
    // flex:1,
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
    // borderBottomWidth:2,
    // borderBottomColor:"gray",
    width: "100%",
  },
  commentContainer: {
    flex: 1,
  },
  commentInput: {
    borderWidth: 0.5,
    borderColor: "gray",
    width: "100%",
    // paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  inputSection: {
    flex: 1,
    placeholder: "enter comment....",
    placeholderColor: "gray",
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
});
