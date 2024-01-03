// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
// } from "react-native";
// import React, { useRef, useState, useEffect } from "react";
// import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
// import { ResizeMode, Video, VideoFullscreenUpdate } from "expo-av";
// import { Ionicons } from "@expo/vector-icons";
// import EntypoIcon from "react-native-vector-icons/Entypo";
// import { EXPO_PUBLIC_API_URL } from "../constants/constant";
// import axios from "axios";

// const { width, height } = Dimensions.get("window");
// console.log(" width, height", width, height);

// const handleIconPress = (icon) => {
//   console.log(`Icon pressed: ${icon}`);
// };

// const ReelsPage = () => {
//   const flatListRef = useRef(null);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);
//   const videoRefs = useRef({});
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [videoData, setVideoData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getReelsData();
//   }, []);

// const getReelsData = async () => {
//     try {
//       let url = `${EXPO_PUBLIC_API_URL}post/allreel`;
//       console.log("url", url);
//       const response = await axios.get(url);
//       console.log("response", response);
//       setVideoData(response?.data?.data);
//     } catch (error) {
//       console.error("Error fetching video data:", error);
//     }
//   };

//   // useEffect(() => {
//   //   if (videoRef.current && isPlaying) {
//   //     videoRef.current.playAsync();
//   //   }
//   // },[isPlaying]); //[isPlaying]

//   useEffect(() => {
//     if (videoRefs.current[currentItemIndex] && isPlaying) {
//       videoRefs.current[currentItemIndex].playAsync();
//     }
//   }, [currentItemIndex, isPlaying]);

//   const onMomentumScrollEnd = (event) => {
//     const newIndex = Math.floor(event.nativeEvent.contentOffset.y / height);
//     setCurrentItemIndex(newIndex);
//     setIsPlaying(true);
//   };

//   const handleVideoPress = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   const handleVideoFinish = () => {
//     setIsPlaying(false);
//     videoRefs.current[currentItemIndex]?.setPositionAsync(0);
//   };

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       onPress={handleVideoPress}
//       activeOpacity={1}
//       style={{ height:570, width:360}} //570 360
//     >
//       {/* <View style={[styles.ReelsPage, { height, width }]}> */}
//       <View style={styles.ReelsPage}>
//         {/* <TouchableOpacity onPress={handleVideoPress}> */}
//         <Video
//           // ref={videoRefs=> (videoRefs.current[index] = videoRefs)}
//           ref={(videoRef) => (videoRefs.current[index] = videoRef)}
//           style={styles.video}
//           source={{ uri: item?.url }}
//           shouldPlay={index === currentItemIndex && isPlaying}
//           isLooping={true}
//           resizeMode={ResizeMode.COVER}
//           VideoFullscreenUpdate={VideoFullscreenUpdate.PLAYER_DID_PRESENT}
//           isMuted={false}
//           _setFullscreen
//           onPlaybackStatusUpdate={(status) => {
//             if (!status.isPlaying) {
//               // setIsPlaying(false);
//               handleVideoFinish();
//             }
//           }}
//         />
//         {/* </TouchableOpacity> */}
//         <View style={styles.secondMainSection}>
//           {/* <View style={styles.iconFirstScetion}> */}
//           <View style={styles.icon}></View>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => handleIconPress("like")}>
//               <Ionicons name="heart-outline" size={30} color="white" />
//               <Text>{item.likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("comment")}>
//               <Ionicons name="chatbubble-outline" size={30} color="white" />
//               <Text>{item.comments}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("share")}>
//               <Ionicons name="share-social-outline" size={30} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("share")}>
//               <EntypoIcon
//                 color={"white"}
//                 name={"dots-three-vertical"}
//                 size={20}
//               />
//             </TouchableOpacity>
//           </View>
//           {/* </View> */}
//           <View style={styles.userProfile}>
//             <View style={styles.user}>
//               <Image
//                 style={styles.profileImg}
//                 source={require("../../assets/comment1.png")}
//               />
//               <Text style={styles.name}>@keerti@@</Text>
//             </View>
//             <View stylr={styles.profileCaption}>
//               <Text style={styles.caption}>
//                 Welcome to this beautiful 3-bedroom, 2-bathroom home located in
//                 the heart
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
//   return (
//     <View style={styles.mainContainer}>
//       <FlatList
//         ref={flatListRef}
//         data={videoData}
//         keyExtractor={(item) => item?._id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         onMomentumScrollEnd={onMomentumScrollEnd}
//         pagingEnabled={true}
//         scrollEnabled={true}
//         stickyHeaderHiddenOnScroll={true}
//       />
//       <View style={styles.buttom}>
//         <BottomNavBar />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   ReelsPage: {
//     flex: 1,
//     // width: "100%",
//     // height: "100%",
//   },
//   // buttom:{
//   //  flex:1,
//   // },
//   video: {
//     ...StyleSheet.absoluteFillObject,
//     // aspectRatio: width/height,
//     // width: "100%",

//     // width: "100%",
//     // height: "100%",
//   },
//   iconFirstScetion: {
//     flex: 1,
//   },
//   icon: {
//     flex: 1,
//   },
//   secondMainSection: {
//     flex: 1,
//     padding: 10,
//     margin: 10,
//   },
//   iconContainer: {
//     flex: 1,
//     flexWrap:"wrap-reverse",
//     rowGap: 15,
//   },
//   userProfile: {
//     maxWidth: 500,
//     // flex: 0.2,
//     // backgroundColor: 'rgba(0, 0, 0, 0.40)',
//     // borderWidth: 1,
//     // borderRadius: 10,
//     // borderColor: '#FDCB0A',
//     // padding:10,
//     // flexDirection:"row"
//   },
//   user: {
//     flexDirection: "row",
//     gap: 5,
//     paddingBottom: 8,
//   },
//   profileImg: {
//     width: 37,
//     height: 37,
//     objectFit: "cover",
//     borderRadius: 50,
//     // display: "flex",
//     // alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#FDCB0A",
//   },
//   profileCaption: {
//     // maxWidth: '75%',
//     marginTop: 10,
//   },
//   name: {
//     color: "#D9D9D9",
//     fontSize: 15,
//     fontWeight: "900",
//     marginTop: 5,
//   },
//   caption: {
//     color: "#D9D9D9",
//     fontSize: 13,
//     fontWeight: "650",
//   },
// });
// export default ReelsPage;



// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
// } from "react-native";
// import React, { useRef, useState, useEffect } from "react";
// import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
// import { ResizeMode, Video, VideoFullscreenUpdate } from "expo-av";
// import { Ionicons } from "@expo/vector-icons";
// import EntypoIcon from "react-native-vector-icons/Entypo";
// import { EXPO_PUBLIC_API_URL } from "../constants/constant";
// import axios from "axios";
// import { ActivityIndicator } from "react-native";

// function getDeviceHeight() {
//   return Dimensions.get("window").height;
// }
// function getDeviceWidth() {
//   return Dimensions.get("window").width;
// }

// const handleIconPress = (icon) => {
//   console.log(`Icon pressed: ${icon}`);
// };

// const ITEM_HEIGHT = getDeviceHeight();
// const ITEM_WIDTH = getDeviceWidth();

// const ReelsPage = () => {
//   const flatListRef = useRef(null);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);
//   const videoRefs = useRef({});
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [videoData, setVideoData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [showIcon, setShowIcon] = useState(false);

//   useEffect(() => {
//     getReelsData();
//   }, []);

//   const getReelsData = async () => {
//     try {
//       let url = `${EXPO_PUBLIC_API_URL}post/allreel`;
//       console.log("url", url);
//       const response = await axios.get(url);
//       console.log("response", response);
//       setVideoData(response?.data?.data);
//     } catch (error) {
//       console.error("Error fetching video data:", error);
//     }
//   };

//   useEffect(() => {
//     if (videoRefs.current[currentItemIndex] && isPlaying) {
//       videoRefs.current[currentItemIndex].playAsync();
//     }
//   }, [currentItemIndex, isPlaying]);

//   function handleScroll(e) {
//     const contentY = e.nativeEvent.contentOffset.y;
//     const index = Math.round(contentY / ITEM_HEIGHT);
//     console.log("handle scroll index", index);
//     setCurrentItemIndex(index);
//     setIsPlaying(true);
//   }

//   function handleMute() {
//     if (videoRefs.current[currentItemIndex]) {
//       setShowIcon((prevState) => !prevState);
//       videoRefs.current[currentItemIndex].setIsMutedAsync(!mute);
//       setMute((prevState) => !prevState);
//       setTimeout(() => {
//         setShowIcon((prevState) => !prevState);
//       }, 1500);
//     }
//   }

//   let hasScrolled = false;

//   function handlePlaybackStatus(playbackStatus) {
//     if (!playbackStatus.isLoaded || playbackStatus.isBuffering) {
//       setLoading(true);
//       return;
//     } else {
//       setLoading(false);
//     }
//     const currentPositionMillis = playbackStatus.positionMillis;
//     const shouldScroll = currentPositionMillis >= 30 * 1000 && !hasScrolled;
//     if (shouldScroll) {
//       handleScroll((prevState) => prevState + 1);
//       hasScrolled = true;
//     }
//   }


//   useEffect(() => {
//     if (currentItemIndex == currentItemIndex - 1) {
//       playVideo();
//     } else {
//       pauseVideo();
//     }
//   }, [currentItemIndex]);




//   async function playVideo() {
//     if (videoRefs.current === null) {
//       return;
//     }
//     await videoRefs.current.playAsync();
//   }

//   async function pauseVideo() {
//     if (videoRefs.current === null) {
//       return;
//     }
//     await videoRefs.current.pauseAsync();
//   }




//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       onPress={handleMute}
//       activeOpacity={0.8}
//       style={styles.container}
//       // style={{ ITEM_HEIGHT, ITEM_WIDTH}} //570 360
//     >
//       {/* <View style={[styles.ReelsPage, { height, width }]}> */}
//       {loading && (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#fff" />
//         </View>
//       )}
//       <View style={styles.ReelsPage}>
//         <Video
//           // ref={videoRefs=> (videoRefs.current[index] = videoRefs)}
//           // ref={(videoRef) => (videoRefs.current[index] = videoRef)}
//           ref={videoRefs}
//           style={styles.video}
//           source={{ uri: item?.url }}
//           // shouldPlay={index === currentItemIndex && isPlaying}
//           shouldPlay
//           useNativeControls={false}
//           isLooping={true}
//           resizeMode={ResizeMode.COVER}
//           onPlaybackStatusUpdate={handlePlaybackStatus}
//         />
//         {/* </TouchableOpacity> */}
//         <View style={styles.secondMainSection}>
//           {/* <View style={styles.iconFirstScetion}> */}
//           <View style={styles.icon}></View>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => handleIconPress("like")}>
//               <Ionicons name="heart-outline" size={30} color="white" />
//               <Text>{item.likes}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("comment")}>
//               <Ionicons name="chatbubble-outline" size={30} color="white" />
//               <Text>{item.comments}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("share")}>
//               <Ionicons name="share-social-outline" size={30} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleIconPress("share")}>
//               <EntypoIcon
//                 color={"white"}
//                 name={"dots-three-vertical"}
//                 size={20}
//               />
//             </TouchableOpacity>
//           </View>
//           {/* </View> */}
//           <View style={styles.userProfile}>
//             <View style={styles.user}>
//               <Image
//                 style={styles.profileImg}
//                 source={require("../../assets/comment1.png")}
//               />
//               <Text style={styles.name}>@keerti@@</Text>
//             </View>
//             <View stylr={styles.profileCaption}>
//               <Text style={styles.caption}>
//                 Welcome to this beautiful 3-bedroom, 2-bathroom home located in
//                 the heart
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
//   return (
//     <View style={styles.mainContainer}>
//       <FlatList
//         ref={flatListRef}
//         data={videoData}
//         keyExtractor={(item) => item?._id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         // onMomentumScrollEnd={onMomentumScrollEnd}
//         onMomentumScrollEnd={handleScroll}
//         // pagingEnabled={true}
//         scrollEnabled={true}
//         // stickyHeaderHiddenOnScroll={true}
//         getItemLayout={(videoData, index) => ({
//           length: ITEM_HEIGHT,
//           offset: ITEM_HEIGHT * index,
//           index,
//         })}
//         pagingEnabled
//         decelerationRate={0.9}
//       />
//       <View style={styles.buttom}>
//         <BottomNavBar />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   container: {
//     justifyContent: "center",
//     backgroundColor: "#000",
//     position: "relative",
//     height: ITEM_HEIGHT,
//     width: ITEM_WIDTH,
//   },
//   ReelsPage: {
//     flex: 1,
//     // width: "100%",
//     // height: "100%",
//   },
//   // buttom:{
//   //  flex:1,
//   // },
//   video: {
//     ...StyleSheet.absoluteFillObject,
//     height: ITEM_HEIGHT,
//     width: ITEM_WIDTH,
//     // aspectRatio: width/height,
//     // width: "100%",

//     // width: "100%",
//     // height: "100%",
//   },
//   loadingContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#000",
//   },
//   iconFirstScetion: {
//     flex: 1,
//   },
//   icon: {
//     flex: 1,
//   },
//   secondMainSection: {
//     flex: 1,
//     padding: 10,
//     margin: 10,
//   },
//   iconContainer: {
//     flex: 1,
//     flexWrap: "wrap-reverse",
//     rowGap: 15,
//   },
//   userProfile: {
//     maxWidth: 500,
//     // flex: 0.2,
//     // backgroundColor: 'rgba(0, 0, 0, 0.40)',
//     // borderWidth: 1,
//     // borderRadius: 10,
//     // borderColor: '#FDCB0A',
//     // padding:10,
//     // flexDirection:"row"
//   },
//   user: {
//     flexDirection: "row",
//     gap: 5,
//     paddingBottom: 8,
//   },
//   profileImg: {
//     width: 37,
//     height: 37,
//     objectFit: "cover",
//     borderRadius: 50,
//     // display: "flex",
//     // alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#FDCB0A",
//   },
//   profileCaption: {
//     // maxWidth: '75%',
//     marginTop: 10,
//   },
//   name: {
//     color: "#D9D9D9",
//     fontSize: 15,
//     fontWeight: "900",
//     marginTop: 5,
//   },
//   caption: {
//     color: "#D9D9D9",
//     fontSize: 13,
//     fontWeight: "650",
//   },
// });
// export default ReelsPage;



import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../components/Reels/reels';
import BottomNavBar from "../components/BottomNavbar/bottomNavbar";
const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}
      >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent />
    </View>
    
  );
};

export default Reels;