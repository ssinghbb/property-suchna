import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import CoustomButton from "../common/CoustomButton";
import { Pressable } from "react-native";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";

const ReelMenu = (props) => {
  console.log("props", props);
  const reelId = props?.item?._id;
  const userId = props?.item?.userId;
  console.log("reelId,userId", reelId, userId);
  // const [openModal, setOpenModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const user = useSelector((state) => state?.user?.user?.user) || {};
      const uploadedUserId =props.uploadedUserId;
      const loginUserId = user?._id;

  useEffect(() => {
    if (deleteSuccess) {
      // getAllPost();
      setDeleteSuccess(false);
    }
  }, [deleteSuccess]);

  const handelReels = async () => {
    console.log("strting time", new Date().toLocaleTimeString());
    // try {
    //    const url = `${EXPO_PUBLIC_API_URL}post/deletereel/${reelId}/${userId}`;
    //    console.log("url",url);
    //   const response = await axios.delete(url);
    //   console.log("response",response);
    //   // console.log(
    //   //   "Response with time",
    //   //   response?.status,
    //   //   new Date().toLocaleTimeString()
    //   // );
    //   setModalVisible(!modalVisible);
    //   Alert.alert("Post deleted successfully");
    //   setDeleteSuccess(true);
    //   props?.getReelsData();
    // } catch (error) {
    //   setModalVisible(!modalVisible);
    //   console.log("Error, deleting post", error);
    //   Alert.alert("Error, deleting post");
    // }

    try {
      // Make an API call using Axios to delete the video
      const url = `${EXPO_PUBLIC_API_URL}post/deletereel/${reelId}/${userId}`;
      console.log("url", url);
      const response = await axios.delete(url);

      // Check the response and handle accordingly
      if (response?.status === 200) {
        console.log("Video deleted successfully!");
        Alert.alert("Video deleted successfully!");
      } else {
        console.error("Failed to delete video. Status:", response?.status);
        Alert.alert("Error, deleting post");
      }

      // Close the modal
      setModalVisible(!modalVisible);
      setDeleteSuccess(true);
       props?.getReelsData();
    } catch (error) {
      setModalVisible(!modalVisible);
      console.error("Error deleting video:", error);
    }
  };

  return loginUserId == userId ? (
    <View>
      <View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 35 }}
          />
        </TouchableOpacity>
      </View>
      <Modal
        // animationType="slide"
        // transparent={true}
        // visible={openModal}
        // onRequestClose={() => {
        //   setOpenModal(!openModal);
        // }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={handelReels}
            >
              <Text style={styles.textStyle}>Delete video</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  ): (
          <TextInput style={{ opacity: 0, height: 0 }} />
        );
};

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  // }

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
export default ReelMenu;

// import {
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     Modal,
//     Alert,
//     TextInput,
//   } from "react-native";
//   import React, { useEffect, useState } from "react";
//   import EntypoIcon from "react-native-vector-icons/Entypo";
//   import Feather from "react-native-vector-icons/Feather";
//   import CustomeButton from "../common/CoustomButton";
//   import { useSelector } from "react-redux";
//   import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
//   import axios from "axios";
//   import { useTranslation } from "react-i18next";

//   const ReelMenu =(props )=> {
//   const { t } = useTranslation();
//     const [openModal, setOpenModal] = useState(false);
//     const [deleteSuccess, setDeleteSuccess] = useState(false);
//     const user = useSelector((state) => state?.user?.user?.user) || {};
//     const uploadedUserId =props.uploadedUserId;
//     const userId = user?._id;
//     const canDeletePost = userId === uploadedUserId;

//     // useEffect(() => {
//     //   if (deleteSuccess) {
//     //     // getAllPost();
//     //     setDeleteSuccess(false);
//     //   }
//     // }, [deleteSuccess]);

//     // const handelPost = async () => {
//     //   // console.log("strting time", new Date().toLocaleTimeString());
//     //   try {
//     //     const url = `${EXPO_PUBLIC_API_URL}post/delete/${props?.postId}/${userId}`;
//     //     const response = await axios.delete(url);
//     //     // console.log(
//     //     //   "Response with time",
//     //     //   response?.status,
//     //     //   new Date().toLocaleTimeString()
//     //     // );
//     //     Alert.alert("Post deleted successfully");
//     //     setOpenModal(false);
//     //     setDeleteSuccess(true);
//     //     props?.getAllPost()
//     //   } catch (error) {
//     //     console.log(
//     //       "Error, deleting post",
//     //       error,
//     //       new Date().toLocaleTimeString()
//     //     );
//     //     Alert.alert("Error, deleting post");
//     //   }
//     // };

//     return userId == uploadedUserId ? (
//       <View>
//         <View>
//         <TouchableOpacity style={{ padding: 10 }} >
//           <Feather
//             name="more-vertical"
//             style={{ color: "white", fontSize: 30 }}
//           />
//         </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={openModal}
//           onRequestClose={() => {
//             setOpenModal(!openModal);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <CustomeButton title={"Delete Post"} onPress={handelPost} />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     ) : (
//       <TextInput style={{ opacity: 0, height: 0 }} />
//     );
//   }
//   const styles = StyleSheet.create({
//     manuIcon: {
//       paddingTop: 20,
//     },
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: 22,
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: "white",
//       borderRadius: 20,
//       padding: 35,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//     },
//     buttonOpen: {
//       backgroundColor: "#F194FF",
//     },
//     buttonClose: {
//       backgroundColor: "#2196F3",
//     },
//     textStyle: {
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center",
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: "center",
//     },
//   });

//   export default ReelMenu;
