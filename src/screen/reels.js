import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
import { ResizeMode, Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const handleIconPress = (icon) => {
  console.log(`Icon pressed: ${icon}`);
};

const ReelsPage = () => {
  const flatListRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const videoRefs = useRef({});;
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getReelsData();
  }, []);

const getReelsData = async () => {
    try {
      let url = `${EXPO_PUBLIC_API_URL}post/allreel`;
      console.log("url", url);
      const response = await axios.get(url);
      console.log("response", response);
      setVideoData(response?.data?.data);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  // useEffect(() => {
  //   if (videoRef.current && isPlaying) {
  //     videoRef.current.playAsync();
  //   }
  // },[isPlaying]); //[isPlaying]

  useEffect(() => {
    if (videoRefs.current[currentItemIndex] && isPlaying) {
      videoRefs.current[currentItemIndex].playAsync();
    }
  }, [currentItemIndex, isPlaying]);

  const onMomentumScrollEnd = (event) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.y / height);
    setCurrentItemIndex(newIndex);
    setIsPlaying(true);
  };

  const handleVideoPress = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVideoFinish = () => {
    // Stop or reset audio playback when video finishes
    setIsPlaying(false);
    videoRefs.current[currentItemIndex]?.setPositionAsync(0);
  };


  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={handleVideoPress}
      activeOpacity={1}
      style={{ height, width }}
    >
      {/* <View style={[styles.ReelsPage, { height, width }]}> */}
      <View style={styles.ReelsPage}>
        {/* <TouchableOpacity onPress={handleVideoPress}> */}
        <Video
          ref={videoRefs}
          style={styles.video}
          source={{ uri: item?.url }}
          shouldPlay={index === currentItemIndex && isPlaying}
          isLooping={true}
          resizeMode={ResizeMode.COVER}
          isMuted={false}
          onPlaybackStatusUpdate={(status) => {
            if (!status.isPlaying) {
              // setIsPlaying(false);
              handleVideoFinish();
            }
          }}
        />
        {/* </TouchableOpacity> */}
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
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={videoData}
        keyExtractor={(item) => item?._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
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
    flexWrap:"wrap-reverse",
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
