import React from "react";
import { View, StyleSheet, Pressable, Button, Text, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import Mater from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
const ButtomNavbar = () => {
  const navigation = useNavigation();
  const route = useRoute();


  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleBack = () => {
    if (route.name === "Post") {
      console.log("You are already on the Post screen");
    } else {
      navigation.goBack();
    }
  };

  return (
    // <View style={styles.mainContainer}>

    <View style={styles.navigationBar}>

      <View  >
        <Pressable onPress={() => navigateToScreen("post")}  style={styles.iconContainer}>
          <Mater color={"white"} name={"home-outline"} size={32} style={{ borderWidth: 0.1 }} />
          {/* <Icon color={"white"} name={"home"} size={32} /> */}
          <Text style={styles.iconText}>Home</Text>
        </Pressable>
      </View>
      <View >
        {/* <Pressable onPress={() => navigateToScreen("reels")} style={styles.iconContainer}> */}
        <Pressable  style={styles.iconContainer}>
          <Mater color={"gray"} name={"play-circle-outline"} size={32} />
          <Text style={{color:'gray',fontSize:10}}>Reels</Text>
        </Pressable>
      </View>

      <View >
        <Pressable onPress={() => navigateToScreen("addPost")} style={styles.iconContainer}>
          <Mater color={"white"} name={"plus-circle-outline"} size={32} />
          <Text style={styles.iconText}>Upload</Text>

        </Pressable>
      </View>
      <View >
        <Pressable onPress={() => navigateToScreen("profile")} style={styles.iconContainer}>
          <Feather color={"white"} name={"user"} size={32} />
          <Text style={styles.iconText}>Profile</Text>
        </Pressable>
      </View>
      <View >
        <Pressable onPress={() => navigateToScreen("notifications")} style={styles.iconContainer}>
          <Mater color={"white"} name={"bell-outline"} size={32} />
          <Text style={styles.iconText}>Notification</Text>
        </Pressable>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
  },
  navigationBar: {
    height: 60,
    borderTopColor: "gray",
    borderTopWidth: 1,
    flexDirection: "row",
    // justifyContent: "space-around",
    justifyContent:'space-evenly',
    alignItems: "center",
    width: '100%',
    // backgroundColor:'green',
    gap:20
  },
  iconContainer: {
    alignItems:'center',
    width:'auto',
    // backgroundColor:'red'
   
  },
  iconText: {
    color: "white",
    marginTop: 0,
    fontSize: 10,
  },
});

export default ButtomNavbar;







