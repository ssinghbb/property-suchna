import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CustomeButton from "../../components/common/CoustomButton";

export default function PostManu(post = {}) {
  const [openModal, setOpenModal] = useState(false);
  const handelPost = async (postId) => {
    try {
      const url = `${EXPO_PUBLIC_API_URL}post/comments/${postId}/${userId}`;
    } catch (error) {
      console.log("error, deleting post");
    }
  };

  return (
    <View>
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
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <CustomeButton
              title={"Delete Post"}
              onPress={() => {
                handelPost;
              }}
            />
          </View>
        </View>
      </Modal>
      <View>
        <TouchableOpacity
          style={styles.manuIcon}
          onPress={() => setOpenModal(true)}
        >
          <EntypoIcon color={"white"} name={"dots-three-vertical"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  manuIcon: {
    // flexDirection:"row-reverse",
    // padding: 2,
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
    backgroundColor: "black",
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
