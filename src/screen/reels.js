
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
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
  
  // Add more video data if needed
];

const handleIconPress = (icon) => {
  console.log(`Icon pressed: ${icon}`);
};

const ReelsPage = () => {
  const flatListRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current) {
      videoRef.current.playAsync();
    }

    // Pause the video when the component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    };
  }, []);

  const onMomentumScrollEnd = (event) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.y / height);
    setCurrentItemIndex(newIndex);
    setIsPlaying(false);
  };

  const handleVideoPress = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={handleVideoPress}
      activeOpacity={1}
      style={{ flex: 1, height, width }}
    >
      <View style={styles.ReelsPage}>
        <Video
          ref={videoRef}
          source={{ uri: item.uri }}
          shouldPlay={index === currentItemIndex && isPlaying}
          isLooping={true}
          resizeMode={ResizeMode.COVER}
          isMuted={false}
          style={styles.video}
          onPlaybackStatusUpdate={(status) => {
            if (!status.isPlaying) {
              setIsPlaying(false);
            }
          }}
        />
        <View style={styles.secondMainSection}>
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
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ReelsPage: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
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
  },
  user: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 8,
  },
  profileImg: {
    width: 37,
    height: 37,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FDCB0A",
  },
  profileCaption: {
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
