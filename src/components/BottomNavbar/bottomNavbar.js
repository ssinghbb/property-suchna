import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
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
        <Pressable onPress={() => navigateToScreen("post")}>
          <View style={styles.iconContainer}>
            <Icon color={"white"} name={"picture-o"} size={32} />
            <Text style={styles.iconText}>Post</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigateToScreen("reels")}>
          <View style={styles.iconContainer}>
            <Icon color={"white"} name={"play-circle"} size={32} />
            <Text style={styles.iconText}>Reels</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigateToScreen("addPost")}>
          <View style={styles.iconContainer}>
            <Icon color={"white"} name={"plus-circle"} size={55} />
          </View>
        </Pressable>
        <Pressable onPress={() => navigateToScreen("profile")}>
          <View style={styles.iconContainer}>
            <Icon color={"white"} name={"user"} size={32} />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigateToScreen("notifications")}>
          <View style={styles.iconContainer}>
            <Icon color={"white"} name={"bell"} size={32} />
            <Text style={styles.iconText}>Notifications</Text>
          </View>
        </Pressable>
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
    height: 70,
    borderTopColor: "gray",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width:"100%",
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    color: "white",
    marginTop: 5,
    fontSize: 10,
  },
});

export default ButtomNavbar;
