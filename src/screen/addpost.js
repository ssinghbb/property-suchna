import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostDetails from "./postdetails";
import { themeStyles } from "../../styles";
import { useTranslation } from "react-i18next";

const AddPost = () => {
  const { t } = useTranslation();
  const [media, setMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result?.uri);
      setIsVideo(false);
    } else {
      setMedia(null);
      setIsVideo(false);
    }
  };

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      videoOptions: {
        maxDuration: 15,
      },
    });

    // if (!result.canceled) {
    //   console.log("Selected video duration:", result.duration);
    //   setMedia(result.uri);
    //   setIsVideo(true);
    // } else {
    //   setMedia(null);
    //   setIsVideo(false);
    // }

    if (!result.canceled) {
      const selectedVideo =
        result?.assets && result?.assets?.length > 0 && result?.assets[0];

      if (selectedVideo) {
        const videoDuration = selectedVideo?.duration;
        console.log("videoDuration", videoDuration);
        if (videoDuration <= 30000) {
          setMedia(selectedVideo.uri);
          setIsVideo(true);
        } else {
          alert(
            "Selected video duration more then 15 seconds. Please choose a shorter video."
          );
          setMedia(null);
          setIsVideo(false);
        }
      }
    } else {
      setMedia(null);
      setIsVideo(false);
    }
  };

  const navigateToScreen = () => {
    if (media) {
      navigation.navigate("postdetails", { file: media, isVideo });
    }
  };

  return (
    <>
      {!media ? (
        <View style={styles.mainContainer}>
          <View style={styles.nav}>
            <Pressable
              onPress={() => navigation.navigate("post")}
              style={({ pressed }) => [{}, styles.Custom]}
            >
              {({ pressed }) => (
                <Icon name="arrow-back" size={30} color="white" />
              )}
            </Pressable>
            <Pressable
              onPress={navigateToScreen}
              style={({ pressed }) => [{}, styles.Custom]}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                    letterSpacing: 2,
                  }}
                >
                  {t(pressed ? "upload.next!" : "upload.Next!")}
                </Text>
              )}
            </Pressable>
          </View>
          <View style={styles.image}>
            {media && (
              <Image
                source={{ uri: media }}
                style={{ width: "90%", height: "70%" }}
              />
            )}
          </View>
          <View style={styles.uploadBtn}>
            <View style={styles.reel}>
              <Icon
                name="videocam-outline"
                size={30}
                // color={themeStyles.primaryColor}
                color={"gray"}
                style={{ paddingRight: 3 }}
              />
              <Pressable
                onPress={pickVideo}
                style={({ pressed }) => [{}, styles.Custom]}
              >
                {({ pressed }) => (
                  <Text
                    style={{
                      textAlign: "center",
                      color: "gray",
                      fontSize: 15,
                    }}
                  >
                    {t(pressed ? "upload.upload!" : "upload.uploadVideo")}
                  </Text>
                )}
              </Pressable>
            </View>
            <View style={styles.reel}>
              <Icon
                name="image-outline"
                size={30}
                color={themeStyles.primaryColor}
                style={{ paddingRight: 3 }}
              />
              <Pressable
                onPress={pickImage}
                style={({ pressed }) => [{}, styles.already]}
              >
                {({ pressed }) => (
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                      padding: 3,
                    }}
                  >
                    {t(pressed ? "upload.loggedIn!" : "upload.uploadPhoto")}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <PostDetails file={media} isVideo={isVideo} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    // backgroundColor:'green'
  },
  nav: {
    width: "100%",
    height: "10%",
    padding: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    width: "100%",
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor:'red'
  },
  reel: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor:'orange'
  },
});

export default AddPost;
