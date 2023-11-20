import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";


export default function commentPost() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={StyleSheet.mainContainer}>
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.commentBorder}>
              <Text style={styles.modalText}>Comments</Text>
            </View>
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
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    height: "100%",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  commentBorder:{
// flex:1,
borderBottomWidth:2,
 borderBottomColor:"gray",

  },
  centeredView:{
    flex:1,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
},
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    // borderBottomWidth:2,
    // borderBottomColor:"gray",
  },
});
