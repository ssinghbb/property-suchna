import { Text, View, StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const AddPost = () => {
  const [image, setImage] = useState(null);



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    console.log("result:", result)

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>welcom to AddPost page</Text>
      <View style={styles.pickImgCon}>
        <View style={styles.uploadBtn}>
          <Button title="Upload" style={{ height: 'auto', backgroundColor: 'orange' }} onPress={pickImage} />
        </View>
        <View style={styles.imgCon}>
          {image && <Image source={{ uri: image }} style={{ width: 90, height: 90 }} />}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "white",
    alignItems: "center",
    fontSize: 30,

  },
  pickImgCon: {
    flexDirection: 'row',
    width: '90%'

  }, imgCon: {
    alignItems: 'flex-end',
    padding: 10,
    flex: 1
  },
  uploadBtn: {
    justifyContent: 'center'
  }
});

export default AddPost;
