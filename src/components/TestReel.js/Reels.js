// Reel.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Reel = ({ reel, index, currentIndex }) => {
  console.log("index:", index)
  const videoRef = React.useRef(null);
  const [like, setLike] = useState(reel?.isLike);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      if (status.isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
    }
  };
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [mute, setMute] = useState(false);

  return (
    <View style={{
      width: windowWidth,
      height: windowHeight,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* {console.log("url: " + reel?.url)} */}
      <TouchableOpacity
        activeOpacity={0.9}

        onPress={() => {
          console.log('press mute------------', mute);
          setMute(!mute)
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >

        <Video
          ref={videoRef}
          source={{ uri: reel?.url }}

          // style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={currentIndex === index}
          status={
            { shouldPlay: currentIndex == index }
          }
          isMuted={mute}
          isLooping
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            bottom: 20,
          }}
        />
      </TouchableOpacity>

      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 60, //edited
          padding: 10,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={{ uri: reel?.userDetails?.url }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />

              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>@keerti</Text>
              </View>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>{reel.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
            {reel?.description} Welcome to this beautiful 3-bedroom, 2-bathroom home located in
            the heart
          </Text>
          {/* <View style={{flexDirection: 'row', padding: 50}}>
            <Ionic
              name="ios-musical-note"
              style={{ color: 'white', fontSize: 16 }}
            />
            <Text style={{color: 'white'}}>Original Audio</Text>
          </View> */}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100, //edited
          right: 0,
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{ color: like ? 'red' : 'white', fontSize: 25 }}
          />
          <Text style={{ color: 'white' }}>100</Text>
          {/* //{item.likes} */}
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{ color: 'white', fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="paper-plane-outline"
            style={{ color: 'white', fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ color: 'white', fontSize: 25 }}
          />
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: 300,
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    color: 'white',
    fontSize: 16,
  },
});

export default Reel;
