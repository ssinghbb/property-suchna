// App.js
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import ReelList from './ReelList';
import { EXPO_PUBLIC_API_URL } from '../../constants/constant';

const TestReel = () => {
  const isMounted = useRef(true);

  const [reels, setReels] = useState([]);
  const [page, setPage] = useState(1); // Track the page for pagination


  useEffect(() => {
    // Fetch Instagram Reels data using your API endpoint
    isMounted.current = true;

    getReelsData()
    return () => {
      isMounted.current = false;
    };
  }, []);
  const getReelsData = async () => {
    console.log('Get Reels functions');
    try {
      let url = `${EXPO_PUBLIC_API_URL}post/allreel?page=${page}&limit=10`;
      console.log("url", url);
      const response = await axios.get(url);
      console.log("isMounted.current:", isMounted.current)
      if (isMounted.current) {
        //   console.log("response", response?.data?.data);
        // console.log("response.data.data:", response.data.data)
        // setReels(response.data.data);
        // setReels(_tt);
        let dataa=[...reels, ...response.data.data]
        console.log("dataa:", dataa)
        setReels((prevData) => {
          // Filter out duplicates based on a unique identifier (e.g., id)
          const newData = response.data.data.filter(
            (newItem) => !prevData.some((item) => item.id === newItem.id)
          );
          return [...prevData, ...newData];
        });

      }


      // console.log("_tt:", _tt)
        console.log("response:end")
    } catch (error) {
      console.error("Error fetching video data:", error);
    } finally {
    //   setLoading(false);
    }
  };

  const loadMoreData = () => {
    console.log("loadMoreData calls")
    setPage(page + 1);
    getReelsData();
  };
  return (
    <View style={styles.container}>
      {reels.length > 0 ? (
        <ReelList loadMoreData={loadMoreData} data={reels} />
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
