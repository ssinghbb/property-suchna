import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Linking from 'expo-linking';

const Test = () => {
  useEffect(() => {
    const handleDeepLink = async () => {
      const url = await Linking.getInitialURL();
      console.log("url:", url)
     
    };

    handleDeepLink();

  }, []);

  return (
    <View>
      <Text style={{color:'white'}}>Test</Text>
    </View>
  )
}

export default Test