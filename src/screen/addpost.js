import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostDetails from "./postdetails";

const AddPost = () => {
  const [media, setMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.uri);
      setIsVideo(false);
    } else {
      setMedia(null);
      setIsVideo(false);
    }
  };

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access media library was denied");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.uri);
      setIsVideo(true);
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
                  {pressed ? "Next!" : "NEXT"}
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
                size={20}
                color="white"
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
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    {pressed ? "Upload!" : "Upload Reel"}
                  </Text>
                )}
              </Pressable>
            </View>
            <View style={styles.reel}>
              <Icon
                name="image-outline"
                size={20}
                color="white"
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
                    }}
                  >
                    {pressed ? "Logged In!" : "Upload Image"}
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
  },
  reel: {
    flexDirection: "row",
  },
});

export default AddPost;
