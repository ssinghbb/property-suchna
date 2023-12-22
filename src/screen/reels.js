import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import { ResizeMode, Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import EntypoIcon from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const videoData = [
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    likes: 100,
    comments: 60,
  },
];

const handleIconPress = (icon) => {
  // Implement logic for handling icon press (like, comment, share, dots)
  console.log(`Icon pressed: ${icon}`);
};

const ReelsPage = () => {
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={[styles.ReelsPage, { height, width }]}>
      <Video
        style={styles.video}
        source={{ uri: item.uri }}
        shouldPlay={true}
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        isMuted={false}
      />
      <View style={styles.secondMainSection}>
        {/* <View style={styles.iconFirstScetion}> */}
        <View style={styles.icon}></View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleIconPress("like")}>
            <Ionicons name="heart-outline" size={30} color="white" />
            <Text>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress("comment")}>
            <Ionicons name="chatbubble-outline" size={30} color="white" />
            <Text>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress("share")}>
            <Ionicons name="share-social-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress("share")}>
            <EntypoIcon
              color={"white"}
              name={"dots-three-vertical"}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {/* </View> */}
        <View style={styles.userProfile}>
          <View style={styles.user}>
            <Image
              style={styles.profileImg}
              source={require("../../assets/comment1.png")}
            />
            <Text style={styles.name}>@keerti@@</Text>
          </View>
          <View stylr={styles.profileCaption}>
            <Text style={styles.caption}>
              Welcome to this beautiful 3-bedroom, 2-bathroom home located in
              the heart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / width);
          // Implement logic based on the current index (e.g., autoplay next video)
        }}
      />
      <View>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ReelsPage: {
    flex: 1,
    // width: "100%",
    //  height: "100%",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
    // width: "100%",
    // height: "100%",
  },
  iconFirstScetion: {
    flex: 1,
  },
  icon: {
    flex: 1,
  },

  secondMainSection: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  iconContainer: {
    flex: 1,
    flexWrap: "wrap-reverse",
    rowGap: 15,
  },
  userProfile: {
    maxWidth: 500,
    // flex: 0.2,
    // backgroundColor: 'rgba(0, 0, 0, 0.40)',
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: '#FDCB0A',
    // padding:10,
    // flexDirection:"row"
  },
  user: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 8,
  },
  profileImg: {
    width: 37,
    height: 37,
    objectFit: "cover",
    borderRadius: 50,
    // display: "flex",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "#FDCB0A",
  },
  profileCaption: {
    // maxWidth: '75%',
    marginTop: 10,
  },
  name: {
    color: "#D9D9D9",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 5,
  },
  caption: {
    color: "#D9D9D9",
    fontSize: 13,
    fontWeight: "650",
  },
});
export default ReelsPage;
