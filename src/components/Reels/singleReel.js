import React, { useRef, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
// import Video from 'react-native-video';
import { ResizeMode, Video, VideoFullscreenUpdate } from "expo-av";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ReelMenu from "./reelMenu";

const SingleReel = ({ item, index, currentIndex, isPlaying,getReelsData }) => {
  getReelsData()
  console.log("getReelsData()",getReelsData());
  const video = React.useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item?.isLike);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          isLooping={true}
          resizeMode={ResizeMode.COVER}
          useNativeControls={false}
          //   shouldPlay={currentIndex === index ? false : true }
          shouldPlay={index === currentIndex && isPlaying}
          source={{ uri: item?.url }}
          //   muted={mute}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 20,
          }}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: "white",
          position: "absolute",
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 60, //edited
          padding: 10,
        }}
      >
        <View style={{}}>
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{ width: 100, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={{ uri: item?.userDetails?.url }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <View>
                <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>
                  @@{item?.userDetails?.fullName}
                </Text>
              </View>
              <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginHorizontal: 10 }}>
            {item?.description} Welcome to this beautiful 3-bedroom, 2-bathroom
            home located in the heart
          </Text>
          {/* <View style={{flexDirection: 'row', padding: 50}}>
            <Ionic
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white'}}>Original Audio</Text>
          </View> */}
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 100, //edited
          right: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{ color: like ? "red" : "white", fontSize: 25 }}
          />
          <Text style={{ color: "white" }}>100</Text>
          {/* //{item.likes} */}
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="paper-plane-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 30 }}
          />
        </TouchableOpacity> */}
        <ReelMenu item={item} getFunction={getReelsData}/>
        {/* <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <Image
            source={item.postProfile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </View> */}
      </View>
    </View>
  );
};

export default SingleReel;
