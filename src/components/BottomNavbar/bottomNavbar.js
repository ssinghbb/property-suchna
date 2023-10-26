import React  from "react";
import {  View, StyleSheet, Pressable, Button,  } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";

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

      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigateToScreen("post")}>
          <Icon color={"white"} name={"home"} size={32} />
          {/* <Text style={styles.iconText}>Post</Text> */}
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigateToScreen("reels")}>
          <Icon color={"white"} name={"play-circle-o"} size={32} />
          {/* <Text style={styles.iconText}>Reels</Text> */}
        </Pressable>
      </View>

      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigateToScreen("addPost")}>
          <Icon color={"white"} name={"plus-circle"} size={32} />
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigateToScreen("profile")}>
          <Icon color={"white"} name={"user-circle-o"} size={32} />
          {/* <Text style={styles.iconText}>Profile</Text> */}
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigateToScreen("notifications")}>
          <Icon color={"white"} name={"bell"} size={28} />
          {/* <Text style={styles.iconText}>Notifications</Text> */}
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
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
  },
  iconText: {
    color: "white",
    marginTop: 5,
    fontSize: 10,
  },
});

export default ButtomNavbar;
