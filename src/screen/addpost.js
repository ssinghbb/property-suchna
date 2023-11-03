import { Text, View, StyleSheet, Button, Image, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {launchCamera, launchImageLibrary} from 'expo-image-picker';
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import PostDetails from "./postdetails"

const AddPost = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);


   const navigation = useNavigation();

  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result);
    console.log("result:", result)
    if (!result.canceled) {
      setImage(result.assets[0].uri);
     
    }else{
      setImage(null);
    }
    
  };

  const pickVideo = async () => {
    // Request permission to access the device's media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status !== 'granted') {
      console.log('Permission to access media library was denied');
      return;
    }
  
    // Launch the video picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });
  
    console.log("result:", result);
  
    if (!result.canceled) {
      setVideo(result.uri);
    }
  };
  
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  
  


  return (

   <>
    {!image? <View style={styles.mainContainer}>
      <View style={styles.nav}>
      <Pressable
        onPress={() => { navigation.navigate("post") }} style={({ pressed }) => [{}, styles.Custom,]}>
        {({ pressed }) => ( <Icon name="arrow-back" size={30} color="white"></Icon>)}
      </Pressable>
      <Pressable
       onPress={() => navigateToScreen("postdetais")}
         style={({ pressed }) => [{}, styles.Custom,]}>
        {({ pressed }) => (<Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>{pressed ? 'next!' : 'next'}</Text>)}
      </Pressable>
      </View>
      
      <View style={styles.image}>
      {image && (
      <Image
        source={{ uri: image }}
        style={{ width:'90%', height: '70%' }} 
      />
    )}
      </View>

       <View style={styles.uploadBtn}>
       <View style={styles.reel}>
       <Icon name="videocam-outline" size={20} color="white"></Icon>
       <Pressable
        onPress={() => {  pickVideo() }} style={({ pressed }) => [{}, styles.Custom,]}>
        {({ pressed }) => (<Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>{pressed ? 'Upload!' : 'Upload Reel'}</Text>)}
      </Pressable>
       </View>


      <View style={styles.reel}>
      <Icon name="image-outline" size={20} color="white"></Icon>
      <Pressable
        onPress={() => { pickImage()  }} style={({ pressed }) => [{}, styles.already,]}>
        {({ pressed }) => (<Text style={{ textAlign: 'center', color: 'white', fontSize: 15}}>{pressed ? 'Logged In!' : 'Upload Image'}</Text>)}
      </Pressable>
      </View>

       </View>
    </View>:<PostDetails file={image}/>}
   </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: "center",
    display: 'flex',
    // justifyContent:'flex-end',
    alignItems: 'center',
    // backgroundColor:'red'
    
  },
  nav:{
    width:'100%',
    height:'10%',
    padding:'4%',
    // backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image:{
    width:'100%',
    height:'85%',
    // backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center'
  },
  uploadBtn: {
    width:'100%',
    height:'5%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    // backgroundColor: 'red'
  },
  reel:{
  flexDirection:'row'
  }

  
});

export default AddPost;
