// App.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import ReelList from './ReelList';
import { EXPO_PUBLIC_API_URL } from '../../constants/constant';

const TestReel = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // Fetch Instagram Reels data using your API endpoint
    getReelsData()

  }, []);
  const getReelsData = async () => {
    try {
      let url = `${EXPO_PUBLIC_API_URL}post/allreel`;
      console.log("url", url);
      const response = await axios.get(url);
    //   console.log("response", response?.data?.data);
      let _tt=response.data.data.splice(0,3)
      // setReels(response.data.data);
      setReels(_tt);


      // console.log("_tt:", _tt)
        console.log("response:end")
    } catch (error) {
      console.error("Error fetching video data:", error);
    } finally {
    //   setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {reels.length > 0 ? (
        <ReelList data={reels} />
      ) : (
        <Text style={{color:'white'}}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestReel;
