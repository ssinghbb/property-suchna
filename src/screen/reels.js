import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";

const { height, width } = Dimensions.get("window");

const ReelsPage = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reels, setReels] = useState([]);

  const handleScreenPress = () => {
    // Ensure currentIndex is within the valid range
    const validIndex = Math.min(
      Math.max(currentIndex, 0),
      reels?.length - 1
    );
    flatListRef.current.scrollToIndex({ index: validIndex, animated: true });
  };
  
  useEffect(() => {
    getAllReels();
  }, []);

  const getAllReels = async function (req, res) {
    try {

      const apiUrl =  `${EXPO_PUBLIC_API_URL}post/allreel`
        const response = await axios.get(
         apiUrl
      );
      console.log("response:", response?.data?.data);
      setReels(response?.data?.data || []);
    } catch (error) {
      console.log("api error", error);
    }
  };



  const handleCommentPress = (index) => {
    console.log("Comment pressed");
    // Add your logic for handling the comment button press
  };

  const handleSharePress = (index) => {
    console.log("Share pressed");
    // Add your logic for handling the share button press
  };

  const handlePlaybackStatusUpdate = (playbackStatus) => {
    // Check if the current video playback has completed
    if (playbackStatus.didJustFinish) {
      // Move to the next video
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reels?.length);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.reelPage}
      activeOpacity={1}
      onPress={() => handleScreenPress()}
    >
      <Video
        style={styles.video}
        shouldPlay={true}
        isLooping
        source={{ uri: item?.url }}
        useNativeControls={false}
        resizeMode="cover"
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => handleLikePress(index)}>
          <Icon name="heart" size={24} color="white" />
          <Text style={styles.likeColor}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCommentPress(index)}>
          <Icon name="comment" size={24} color="white" />
          <Text>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSharePress(index)}>
          <Icon name="share" size={24} color="white" />
          <Text>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={reels}
        renderItem={renderItem}
        keyExtractor={(item) => item?._id}
        vertical
        pagingEnabled
        showsVerticalScrollIndicator={false}
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
  reelPage: {
    height,
    width,
    position: "relative",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "flex-end",
    padding: 20,
    paddingTop: 450,
    gap: 40,
  },
  likeColor: {
    color: "white",
  },
});

export default ReelsPage;
