import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
// import {videoData} from './Database';
import SingleReel from "./singleReel";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import axios from "axios";

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SwiperFlatList
      vertical={true}
      //    autoplay
      //   autoplayLoop
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      showPagination
      renderItem={({ item, index }) => (
        <SingleReel
          item={item}
          index={index}
          currentIndex={currentIndex}
          isPlaying={isPlaying}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ReelsComponent;
