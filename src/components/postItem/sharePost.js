import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { themeStyles } from "../../../styles";
//import Share from 'react-native-share';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';

export default function SharePost({ post }) {
  // console.log("post:", post)
  const handleShare =async () => {
    // Create a shareable link to your Expo app
    const appLink = 'https://exp.host/ssinghbb/property-suchna';
    const app=await Linking.createURL('https://www.example.com')

    console.log("app:", app)

    // Open the WhatsApp share sheet with the link
    // Linking.
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(`${app}`)}`)
      .then(() => console.log('WhatsApp opened'))
      .catch(() => alert('WhatsApp is not installed on your device.'));
  };
  return (
    <View>
      <TouchableOpacity>
        <Icon color={"white"} name={"share"} size={25} onPress={handleShare} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 0,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    height: 60,
    padding: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    margin: 0,
  },

  userName: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  postImg: {
    width: "100%",
    // paddingVertical: 10,
    height: 400,
  },
  post: {
    width: "100%",
    height: 400,
  },
  likeComment: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 20,
    paddingTop: 20,
  },
  saveIconContainer: {
    paddingLeft: 220,
  },
  descriptionSection: {
    paddingVertical: 8,
    paddingLeft: 20,
  },
  description: {
    color: "white",
    fontSize: 13,
  },

  postPage: {
    width: "100%",
  },
  myText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  postCard: {
    flex: 1,
    height: "100%", // Set the height to the full screen height
  },
  liked: {
    color: themeStyles.primaryColor,
  },
});
