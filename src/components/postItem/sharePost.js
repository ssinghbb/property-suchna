import { View, Text, StyleSheet, TouchableOpacity, Share, Alert } from "react-native";
import React,{useEffect} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { themeStyles } from "../../../styles";
//import Share from 'react-native-share';
import * as Sharing from 'expo-sharing';

export default function SharePost({ post }) {
  // console.log("post:", post?._id)
  const handleShare =async () => {
    // Create a shareable link to your Expo app
    console.log("app:sg=hare post")
    // if(Sharing.isAvailableAsync()){
    //   let url=`https://abc.property.com/post/${post?._id}`
    //     let shareable=await Sharing.shareAsync(url,{dialogTitle: 'Share'})
    // }

      try {
      let url=`https://abc.property.com/post/?id=${post?._id}`

        const result = await Share.share({
          message:
            url
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
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
